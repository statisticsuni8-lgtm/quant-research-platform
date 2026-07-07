import requests
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

if __name__ == "__main__":
    update_market_data()
