import { MapPin, BookOpen, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center px-4">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8 border border-emerald-500/30 overflow-hidden relative shadow-[0_0_40px_-15px_rgba(16,185,129,0.5)]">
        {/* Placeholder for actual photo, replace src later */}
        <div className="text-4xl text-emerald-500 font-bold">OD</div>
        {/* <img src="/photo.jpg" alt="Om Das" className="object-cover w-full h-full" /> */}
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I'm <span className="text-emerald-500">Om Das</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        Physics Student <span className="mx-2 text-emerald-500/50">•</span> Aspiring Educator <span className="mx-2 text-emerald-500/50">•</span> Vibe Coder
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm">
          <MapPin size={16} className="text-emerald-500" />
          <span>Haflong, Assam</span>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm">
          <BookOpen size={16} className="text-emerald-500" />
          <span>Assam University</span>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm">
          <Terminal size={16} className="text-emerald-500" />
          <span>Self-taught Dev</span>
        </div>
      </div>
    </section>
  );
}
