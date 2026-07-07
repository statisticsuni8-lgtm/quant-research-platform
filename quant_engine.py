import math
from datetime import datetime, timezone

import yfinance as yf
from supabase import create_client
import os

# 환경변수에서 가져오기 (GitHub Actions secrets로 주입)
# insert는 RLS를 우회해야 하므로 anon key가 아닌 service_role key를 사용합니다.
url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase = create_client(url, key)

def update_market_data():
    semis = ["005930.KS", "000660.KS", "NVDA"]
    for s in semis:
        ticker = yf.Ticker(s)
        hist = ticker.history(period="60d")
        if not hist.empty:
            close = hist['Close']
            z_score = (close.iloc[-1] - close.mean()) / close.std()
            price = close.iloc[-1]

            # Supabase에 데이터 삽입
            data = {"ticker": s, "z_score": float(z_score), "price": float(price)}
            supabase.table("market_data").insert(data).execute()
            print(f"Updated {s}: {z_score}")


def _safe_num(value, default=0.0):
    try:
        value = float(value)
    except (TypeError, ValueError):
        return default
    return default if math.isnan(value) else value


def _norm_pdf(x):
    return math.exp(-0.5 * x * x) / math.sqrt(2 * math.pi)


def _bs_gamma(spot, strike, years, iv, rate=0.04):
    if years <= 0 or iv <= 0 or spot <= 0 or strike <= 0:
        return 0.0
    d1 = (math.log(spot / strike) + (rate + 0.5 * iv * iv) * years) / (iv * math.sqrt(years))
    return _norm_pdf(d1) / (spot * iv * math.sqrt(years))


def update_gamma_exposure(underlying="SPY", max_days_out=45):
    """
    SPY 옵션체인 기반 행사가별 순 감마 익스포저(Net GEX)를 계산해 Supabase에 저장합니다.

    주의: 딜러(마켓메이커)의 실제 포지션(콜 매수/풋 매도 여부)은 공개 데이터가 아니라서,
    업계에서 널리 쓰이는 단순화 관행(콜 OI는 딜러 롱감마, 풋 OI는 딜러 숏감마로 가정)을
    그대로 적용합니다. 실제 포지셔닝과 다를 수 있는 근사치 모델입니다.
    """
    t = yf.Ticker(underlying)
    spot = t.history(period="1d")["Close"].iloc[-1]
    now = datetime.now(timezone.utc)

    strikes = {}
    for exp in t.options:
        days_out = (datetime.strptime(exp, "%Y-%m-%d").replace(tzinfo=timezone.utc) - now).days
        if days_out < 0 or days_out > max_days_out:
            continue
        years = max(days_out, 1) / 365.0
        chain = t.option_chain(exp)

        for _, row in chain.calls.iterrows():
            iv = _safe_num(row["impliedVolatility"])
            oi = _safe_num(row["openInterest"])
            gamma = _bs_gamma(spot, row["strike"], years, iv)
            entry = strikes.setdefault(row["strike"], {"call_oi": 0, "put_oi": 0, "call_gex": 0.0, "put_gex": 0.0})
            entry["call_oi"] += int(oi)
            entry["call_gex"] += gamma * oi * 100 * spot * spot * 0.01

        for _, row in chain.puts.iterrows():
            iv = _safe_num(row["impliedVolatility"])
            oi = _safe_num(row["openInterest"])
            gamma = _bs_gamma(spot, row["strike"], years, iv)
            entry = strikes.setdefault(row["strike"], {"call_oi": 0, "put_oi": 0, "call_gex": 0.0, "put_gex": 0.0})
            entry["put_oi"] += int(oi)
            entry["put_gex"] += gamma * oi * 100 * spot * spot * 0.01

    rows = []
    for strike, v in strikes.items():
        rows.append({
            "underlying": underlying,
            "strike": float(strike),
            "spot_price": float(spot),
            "call_oi": v["call_oi"],
            "put_oi": v["put_oi"],
            "call_gex": float(v["call_gex"]),
            "put_gex": float(v["put_gex"]),
            "net_gex": float(v["call_gex"] - v["put_gex"]),
        })

    if rows:
        supabase.table("gamma_exposure").insert(rows).execute()
        print(f"Updated gamma_exposure for {underlying}: {len(rows)} strikes, spot={spot:.2f}")


if __name__ == "__main__":
    update_market_data()
    update_gamma_exposure()
