import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  repo_url: string;
  tags: string[];
  image_url?: string;
  featured: boolean;
};

export function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight inline-block border-b-4 border-emerald-500 pb-2">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300">
            {project.image_url ? (
              <div className="h-48 w-full bg-muted relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ) : (
              <div className="h-32 w-full bg-emerald-500/10 flex items-center justify-center">
                <span className="text-emerald-500/50 font-bold text-2xl">{project.title}</span>
              </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 mt-auto">
                {project.url && (
                  <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400 transition-colors">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Link>
                )}
                {project.repo_url && (
                  <Link href={project.repo_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium border border-border px-4 py-2 rounded-md hover:bg-muted transition-colors">
                    <Github size={16} />
                    <span>Source</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
