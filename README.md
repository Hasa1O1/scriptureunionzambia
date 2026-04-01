# Scripture Union Zambia Website

A comprehensive website for Scripture Union Zambia built with React, TypeScript, and Supabase.

## Features

### Public Pages
- **Home**: Hero section, mission overview, newsletter signup
- **About Us**: Mission, vision, organizational values
- **Services**: Programs and ministries
- **Team**: Staff and leadership profiles
- **Blog/News**: Searchable blog posts
- **Gallery**: Photo gallery with categories
- **Testimonials**: Community testimonials
- **Contact**: Contact form with Google Maps
- **Donate**: GoFundMe integration
- **Partnership**: Partnership registration
- **Community**: Community signup

### Content Management System
- Admin authentication for 3 admin users
- Dashboard for managing:
  - Blog posts (create, edit, publish/draft)
  - Gallery items
  - Portfolio items
- Secure data storage with Supabase

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Routing**: React Router DOM
- **Backend**: Supabase (Database + Auth)
- **Styling**: Tailwind CSS (via custom CSS)
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scripture-union-zambia
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env` and update with your Supabase credentials
   - Get your Supabase URL and anon key from your Supabase project

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

### Supabase Setup

1. Create a new Supabase project
2. Run the migration script in `supabase/migrations/20260401085835_create_initial_schema.sql`
3. Create admin users in Supabase Auth
4. Update the `.env` file with your project credentials

### Admin Access

- Navigate to `/admin` to access the login page
- Use admin credentials created in Supabase Auth
- Access the dashboard at `/admin/dashboard` after login

## Color Scheme

- Primary Blue: #003366
- Secondary Red: #CC0000
- White: #FFFFFF
- Light Gray: #F5F5F5
- Dark Gray: #333333

## Deployment

The website is production-ready and can be deployed to:
- Vercel
- Netlify
- Any static hosting service
- VPS with Node.js

## Contact

Scripture Union Zambia
Email: Info@scriptureunionzambia.org.zm
Phone: +260 763 670 0777