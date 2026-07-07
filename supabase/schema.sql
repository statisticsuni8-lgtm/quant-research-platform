-- Supabase SQL editor에서 한 번 실행하세요.
-- https://supabase.com/dashboard/project/ffzhktqabijougwrvjaz/sql/new

create table if not exists market_data (
  id bigint generated always as identity primary key,
  ticker text not null,
  z_score double precision not null,
  price double precision not null,
  created_at timestamptz not null default now()
);

create index if not exists market_data_ticker_created_at_idx
  on market_data (ticker, created_at desc);

alter table market_data enable row level security;

-- 대시보드(anon key)가 읽기만 가능하도록 허용
drop policy if exists "Allow public read access" on market_data;
create policy "Allow public read access"
  on market_data for select
  to anon
  using (true);

-- insert는 service_role(quant_engine.py에서 사용하는 키)만 가능 — anon insert 정책은 만들지 않음.
