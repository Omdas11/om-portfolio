-- Create tables

-- Links table
CREATE TABLE IF NOT EXISTS public.links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    category TEXT CHECK (category IN ('primary', 'secondary')),
    visible BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    url TEXT,
    repo_url TEXT,
    tags TEXT[],
    image_url TEXT,
    sort_order INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for links
-- Public can read visible links
CREATE POLICY "Public can read visible links" 
    ON public.links FOR SELECT 
    USING (visible = true);

-- Admin can do everything on links
CREATE POLICY "Admin full access on links" 
    ON public.links FOR ALL 
    USING (auth.role() = 'authenticated');

-- RLS Policies for projects
-- Public can read all projects
CREATE POLICY "Public can read all projects" 
    ON public.projects FOR SELECT 
    USING (true);

-- Admin can do everything on projects
CREATE POLICY "Admin full access on projects" 
    ON public.projects FOR ALL 
    USING (auth.role() = 'authenticated');

-- RLS Policies for messages
-- Public can insert messages
CREATE POLICY "Public can insert messages" 
    ON public.messages FOR INSERT 
    WITH CHECK (true);

-- Admin can read/delete messages
CREATE POLICY "Admin full access on messages" 
    ON public.messages FOR ALL 
    USING (auth.role() = 'authenticated');
