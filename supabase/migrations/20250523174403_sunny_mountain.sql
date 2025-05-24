-- Create a new bucket for artwork
INSERT INTO storage.buckets (id, name, public) 
VALUES ('artwork', 'artwork', true);

-- Allow public access to the artwork bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'artwork');

-- Allow authenticated users to upload files
CREATE POLICY "Allow uploads"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'artwork');