-- TaskFlow schema (FAKE demo).
-- INTENTIONAL HOLE: Row Level Security is never enabled, so anyone with the public
-- anon key can read every row of these tables.

create table public.profiles (
  id uuid primary key references auth.users (id),
  name text,
  email text,
  phone text,
  is_admin boolean not null default false
);

create table public.users (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  phone text,
  created_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles (id),
  title text not null,
  done boolean not null default false,
  created_at timestamptz not null default now()
);
