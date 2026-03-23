-- RUN THIS IN YOUR SUPABASE SQL EDITOR TO CREATE YOUR TABLES

CREATE TABLE blogs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  category text,
  image text,
  date text,
  tags text[]
);

CREATE TABLE mentors (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  expertise text,
  experience text,
  company text,
  photo text
);

CREATE TABLE ambassadors (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  college text,
  country text,
  photo text
);
