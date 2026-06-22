import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects, Project } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer, SocialLink } from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    title: "ExamArchive",
    description: "A free, community-driven platform for past exam papers and syllabi, currently in early access, starting with Haflong Government College. Built with Next.js + Appwrite, developed mobile-first with AI assistance.",
    url: "https://www.examarchive.dev/",
    repo_url: "https://github.com/Omdas11/examarchive-v3",
    tags: ["Next.js", "Appwrite", "Tailwind"],
    featured: true,
  }
];

const DUMMY_LINKS: SocialLink[] = [
  { id: "1", name: "GitHub", url: "https://github.com/Omdas11", icon: "github", category: "primary", visible: true, sort_order: 1 },
  { id: "2", name: "LinkedIn", url: "https://www.linkedin.com/in/om-das-23451b283", icon: "linkedin", category: "primary", visible: true, sort_order: 2 },
  { id: "3", name: "X/Twitter", url: "https://x.com/OmDas46705291", icon: "twitter", category: "primary", visible: true, sort_order: 3 },
  { id: "4", name: "Email", url: "mailto:omdasg11@gmail.com", icon: "mail", category: "primary", visible: true, sort_order: 4 },
  { id: "5", name: "Instagram", url: "https://www.instagram.com/no.stalgiaaa_", icon: "instagram", category: "secondary", visible: true, sort_order: 5 },
  { id: "6", name: "WhatsApp", url: "https://wa.me/yournumber", icon: "whatsapp", category: "secondary", visible: true, sort_order: 6 },
];

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  let projects: Project[] = DUMMY_PROJECTS;
  let links: SocialLink[] = DUMMY_LINKS;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabase = await createClient();
      
      const { data: fetchedProjects, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
        
      if (!projectsError && fetchedProjects && fetchedProjects.length > 0) {
        projects = fetchedProjects;
      }

      const { data: fetchedLinks, error: linksError } = await supabase
        .from('links')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!linksError && fetchedLinks && fetchedLinks.length > 0) {
        links = fetchedLinks;
      }
    }
  } catch (error) {
    console.error("Failed to fetch data from Supabase, using fallbacks.", error);
  }

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-emerald-500/30">
      {/* Decorative top gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none"></div>

      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer links={links} />
    </main>
  );
}
