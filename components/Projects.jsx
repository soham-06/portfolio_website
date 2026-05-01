const projects = [
  {
    id: "livescribe",
    title: "LiveScribe",
    desc: "Meeting Intelligence System — speech-to-insight pipeline with LLM reasoning",
    tags: ["Python", "FastAPI", "Whisper", "LLMs"],
    href: "https://github.com/soham-06",
  },
  {
    id: "applygrid",
    title: "ApplyGrid",
    desc: "Autonomous Job Application System with RAG-powered semantic matching",
    tags: ["Python", "FastAPI", "RAG", "Playwright"],
    href: "https://github.com/soham-06",
  },
  {
    id: "krishiai",
    title: "Krishi AI",
    desc: "AI-powered Agriculture Assistant — fine-tuned LLAMA 3.1 for crop advisory",
    tags: ["Python", "HuggingFace", "FastAPI", "🏆 1st Prize"],
    href: "https://github.com/soham-06",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="sectionTitle">Projects</h2>
      <p className="sectionSubtitle">A collection of some of the projects I&apos;ve worked on.</p>
      <div className="projectsGrid">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard"
            id={`project-${p.id}`}
          >
            <div className="projectCardBody">
              <h3 className="projectCardTitle">{p.title}</h3>
              <p className="projectCardDesc">{p.desc}</p>
              <div className="projectCardTags">
                {p.tags.map((t) => (
                  <span key={t} className="projectTag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="projectsMore">
        <a href="https://github.com/soham-06" target="_blank" rel="noopener noreferrer">
          More Projects on Github ↗
        </a>
      </div>
    </section>
  );
}
