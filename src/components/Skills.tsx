export function Skills() {
  const skills = [
    { name: "Google Skills", desc: "Generative AI Certification", highlight: true },
    { name: "Microsoft Learn", desc: "C# Basics", highlight: true },
    { name: "BFSI", desc: "Foundation Course", highlight: false },
    { name: "freeCodeCamp", desc: "Active Learner", highlight: false },
    { name: "Kaggle", desc: "Active Learner", highlight: false },
    { name: "Scrimba", desc: "Active Learner", highlight: false },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight inline-block border-b-4 border-emerald-500 pb-2">Skills & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
              skill.highlight 
                ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40' 
                : 'bg-card border-border hover:bg-muted'
            }`}
          >
            <h3 className={`font-bold mb-1 ${skill.highlight ? 'text-emerald-500' : 'text-foreground'}`}>
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground">{skill.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
