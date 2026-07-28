# Astitva Garbhsanskar — Production Website

A complete, production-ready web application for **Astitva Garbhsanskar**, a live online prenatal wellness program founded by Prajakta Dhamane & Minal Purkar in Pune, India.

---

## 🛠️ Technology Stack

- **Core**: Next.js 15 (App Router, TypeScript, `src/` directory layout)
- **Styling**: Tailwind CSS v4 using `@theme` tokens in `globals.css`
- **Fonts**: Fraunces (Headings) & Nunito Sans (Body) via `next/font/google`
- **Database**: Supabase Postgres (`@supabase/supabase-js`)
- **Analytics**: Google Analytics 4 (`next/script`)
- **Deployment**: Vercel

---

## 🚀 Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase Configuration (NEW key format)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_pub_your_publishable_key_here
SUPABASE_SECRET_KEY=sb_secret_your_secret_key_here

# Admin Portal Password
ADMIN_PASSWORD=Pranshu@astitva@123

# Google Analytics 4 (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> **Note**: Do NOT use legacy `anon` or `service_role` key names.

---

## 💻 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Verify production build:
   ```bash
   npm run build
   ```

---

## 🔐 Admin Portal

Access the owner admin portal at `/admin` (e.g. `http://localhost:3000/admin`).

- **Password**: Defined in `ADMIN_PASSWORD` env variable (default: `Pranshu@astitva@123`)
- **Capabilities**:
  - Review & Approve pending customer reviews
  - Unpublish / delete reviews
  - View all incoming customer enquiries with direct **Tap to Call** and **Tap to WhatsApp** buttons

---

## 📊 Supabase SQL Database Setup

Copy and run the following SQL script in your Supabase SQL Editor:

```sql
-- 1. Create Reviews Table
CREATE TABLE IF NOT EXISTS public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  pregnancy_month int,
  rating int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- 2. Create Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  pregnancy_month int,
  message text,
  created_at timestamptz DEFAULT now()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for Reviews
CREATE POLICY "Allow public insert on reviews" ON public.reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read approved reviews" ON public.reviews
  FOR SELECT USING (status = 'approved');

-- 5. RLS Policies for Enquiries
CREATE POLICY "Allow public insert on enquiries" ON public.enquiries
  FOR INSERT WITH CHECK (true);

-- 6. Explicit Grants for PostgREST (Required for Supabase projects created after May 30, 2026)
GRANT ALL ON TABLE public.reviews TO postgres, anon, authenticated, service_role;
GRANT ALL ON TABLE public.enquiries TO postgres, anon, authenticated, service_role;
```

---

## 🌐 Deploying to Vercel

1. Push code to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/astitva-garbhsanskar.git
   git branch -M main
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/new) -> Import repository.
   - Select Framework Preset: **Next.js**.

3. Configure Environment Variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL` (Public)
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (Public)
   - `SUPABASE_SECRET_KEY` (Secret)
   - `ADMIN_PASSWORD` (Secret)
   - `NEXT_PUBLIC_GA_ID` (Public)

4. Deploy & Connect Domain:
   - Click **Deploy**.
   - Under Settings -> Domains, add your custom domain `astitvagarbhsanskar.com` and configure A/CNAME records as prompted by Vercel.
