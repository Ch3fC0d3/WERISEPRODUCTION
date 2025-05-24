/*
  # Create submissions tables

  1. New Tables
    - `art_submissions`
      - `id` (uuid, primary key)
      - `title` (text)
      - `creator_name` (text)
      - `email` (text)
      - `description` (text)
      - `artwork_url` (text)
      - `created_at` (timestamp)
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read their own submissions
    - Add policies for anyone to create submissions
*/

CREATE TABLE IF NOT EXISTS art_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  creator_name text NOT NULL,
  email text NOT NULL,
  description text,
  artwork_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE art_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for art submissions
CREATE POLICY "Anyone can create art submissions"
  ON art_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own art submissions"
  ON art_submissions
  FOR SELECT
  TO public
  USING (email = auth.jwt() ->> 'email');

-- Policies for contact messages
CREATE POLICY "Anyone can create contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own contact messages"
  ON contact_messages
  FOR SELECT
  TO public
  USING (email = auth.jwt() ->> 'email');