import { Mail, Link as LinkIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  twitter: <FaTwitter size={20} />,
  mail: <Mail size={20} />,
  instagram: <FaInstagram size={20} />,
  whatsapp: <FaWhatsapp size={20} />,
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
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Om Das. Built with Next.js & Supabase.
            </p>
            <Link 
              href="/admin" 
              className="text-muted-foreground/30 hover:text-emerald-500 transition-colors"
              title="Admin Dashboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
