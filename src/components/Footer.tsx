import { Github, Linkedin, Twitter, Mail, Instagram, MessageCircle, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  icon: string | null;
  category: "primary" | "secondary";
  visible: boolean;
  sort_order: number;
};

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
  mail: <Mail size={20} />,
  instagram: <Instagram size={20} />,
  whatsapp: <MessageCircle size={20} />,
};

function getIcon(iconName: string | null) {
  if (!iconName) return <LinkIcon size={20} />;
  return iconMap[iconName.toLowerCase()] || <LinkIcon size={20} />;
}

export function Footer({ links }: { links: SocialLink[] }) {
  const visibleLinks = links?.filter(l => l.visible).sort((a, b) => a.sort_order - b.sort_order) || [];
  const primaryLinks = visibleLinks.filter(l => l.category === "primary");
  const secondaryLinks = visibleLinks.filter(l => l.category === "secondary");

  return (
    <footer className="border-t border-border mt-20 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Primary Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {primaryLinks.map(link => (
            <Link 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              {getIcon(link.icon)}
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Secondary Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            {secondaryLinks.map(link => (
              <Link 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emerald-500 transition-colors p-2 bg-muted rounded-full hover:bg-emerald-500/10"
                title={link.name}
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Om Das. Built with Next.js & Supabase.
          </p>
        </div>

      </div>
    </footer>
  );
}
