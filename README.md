# Om Das - Personal Portfolio

A sleek, dark-mode first portfolio website built for Om Das using Next.js (App Router), Tailwind CSS v4, and Supabase.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Database / Auth**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 🚀 Setup & Deployment Guide

This project requires a Supabase backend to store links, projects, and messages.

### 1. Supabase Project Setup
1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Once the project is ready, go to **Project Settings -> API** to get your `Project URL` and `anon public` key.
3. Go to the **SQL Editor** in your Supabase dashboard and run the entire SQL script located in `supabase/migrations/20240101000000_init_schema.sql`. This will create the required tables (`links`, `projects`, `messages`) and set up Row Level Security (RLS) policies.
4. Go to **Authentication -> Providers** and make sure Email/Password is enabled. 
5. Go to **Authentication -> Users** and manually create your Admin user (e.g., `omdasg11@gmail.com`). This is the *only* account that will be able to log into the `/admin` dashboard.

### 2. Local Environment Setup
1. Clone this repository: `git clone https://github.com/Omdas11/om-portfolio.git`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

### 3. Vercel Deployment
1. Go to [Vercel](https://vercel.com/) and create a new project from your GitHub repository.
2. In the Vercel project settings, go to **Environment Variables** and add the exact same variables from your `.env.local` file (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
3. Click **Deploy**. Vercel will automatically build the Next.js app and serve it.
4. Make sure to add `resume.pdf` to your `public` directory before your final deploy.

---

## 🗄️ Database Schema & RLS Policies

The database is structured to be secure by default. Public users can only read `links` and `projects`, and can only *insert* `messages` via the contact form.

- **`links`**: Stores footer/social links. Admin can CRUD, Public can read where `visible=true`.
- **`projects`**: Stores portfolio projects. Admin can CRUD, Public can read all.
- **`messages`**: Stores contact form submissions. Admin can read/delete, Public can *only* insert.

See `supabase/migrations/` for exact SQL definitions.

---

## 🔑 Admin Dashboard
Navigate to `/admin/login` and sign in with the user you created in the Supabase dashboard. Once signed in, you can view messages directly from the UI. (Note: The admin dashboard provides a read-only view in this template version, but the backend is fully secured to allow CRUD from an authenticated client).
