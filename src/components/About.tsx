export function About() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="about">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight border-l-4 border-emerald-500 pl-4">About Me</h2>
          
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <p className="text-lg">
              I am a Physics student at Haflong Government College, deeply passionate about teaching and academia. 
              While my core focus is physics, I've always been curious about philosophy, design, and how technology 
              can solve real-world problems.
            </p>
            <p className="text-lg">
              I am a <strong className="text-foreground font-semibold">self-taught "vibe coder"</strong>. 
              I am not a professional developer; I picked up coding (primarily working from my mobile phone using AI assistance) 
              as a practical tool to build things that matter.
            </p>
            <p className="text-lg">
              My most significant technical achievement so far is building ExamArchive—a free, community-driven platform 
              to provide past exam papers and syllabi for students, starting with my own college.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-emerald-500">Education</h3>
            <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-muted">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <h4 className="font-semibold text-lg">B.Sc. Physics (FYUG)</h4>
                <p className="text-muted-foreground">Haflong Government College (Assam University)</p>
                <div className="mt-2 text-sm bg-muted inline-block px-3 py-1 rounded-full text-foreground">
                  6th Semester • Expected June 2027
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-emerald-500">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['English', 'Bengali', 'Assamese', 'Hindi'].map((lang) => (
                <span key={lang} className="bg-background border border-border px-3 py-1 rounded-md text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
