/*
  # Scripture Union Zambia Website - Initial Schema

  ## Overview
  Creates database schema for the Scripture Union Zambia CMS website with admin authentication,
  content management, and community features.

  ## New Tables
  
  ### 1. `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `content` (text) - Blog post content
  - `excerpt` (text) - Short summary
  - `author_id` (uuid) - Reference to auth.users
  - `featured_image` (text) - Image URL
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `gallery_items`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Gallery item title
  - `description` (text) - Item description
  - `image_url` (text) - Image URL
  - `category` (text) - Category/tag
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. `portfolio_items`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Portfolio item title
  - `description` (text) - Item description
  - `image_url` (text) - Image URL
  - `year` (text) - Year of project
  - `created_at` (timestamptz) - Creation timestamp

  ### 4. `team_members`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Team member name
  - `role` (text) - Position/role
  - `bio` (text) - Biography
  - `image_url` (text) - Profile image URL
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 5. `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Person's name
  - `content` (text) - Testimonial content
  - `role` (text) - Person's role/affiliation
  - `image_url` (text) - Profile image URL
  - `featured` (boolean) - Featured status
  - `created_at` (timestamptz) - Creation timestamp

  ### 6. `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email
  - `phone` (text) - Sender's phone
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Creation timestamp

  ### 7. `newsletter_subscriptions`
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email
  - `subscribed` (boolean) - Subscription status
  - `created_at` (timestamptz) - Creation timestamp

  ### 8. `community_members`
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Member's full name
  - `email` (text, unique) - Member's email
  - `phone` (text) - Member's phone
  - `country` (text) - Member's country
  - `created_at` (timestamptz) - Creation timestamp

  ### 9. `partnership_requests`
  - `id` (uuid, primary key) - Unique identifier
  - `organization_name` (text) - Organization name
  - `contact_name` (text) - Contact person name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone
  - `message` (text) - Partnership proposal
  - `status` (text) - Request status (pending, approved, rejected)
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  
  All tables have RLS enabled with appropriate policies:
  - Public read access for published content
  - Authenticated admin-only write access
  - Secure submission storage for forms
*/

-- Blog Posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  author_id uuid REFERENCES auth.users(id),
  featured_image text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete their blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Gallery Items
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create gallery items"
  ON gallery_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery items"
  ON gallery_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery items"
  ON gallery_items FOR DELETE
  TO authenticated
  USING (true);

-- Portfolio Items
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  year text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view portfolio items"
  ON portfolio_items FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create portfolio items"
  ON portfolio_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio items"
  ON portfolio_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolio items"
  ON portfolio_items FOR DELETE
  TO authenticated
  USING (true);

-- Team Members
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create team members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON team_members FOR DELETE
  TO authenticated
  USING (true);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content text NOT NULL,
  role text,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- Contact Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Newsletter Subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view newsletter subscriptions"
  ON newsletter_subscriptions FOR SELECT
  TO authenticated
  USING (true);

-- Community Members
CREATE TABLE IF NOT EXISTS community_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  country text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE community_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join community"
  ON community_members FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view community members"
  ON community_members FOR SELECT
  TO authenticated
  USING (true);

-- Partnership Requests
CREATE TABLE IF NOT EXISTS partnership_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partnership_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create partnership requests"
  ON partnership_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view partnership requests"
  ON partnership_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update partnership requests"
  ON partnership_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);