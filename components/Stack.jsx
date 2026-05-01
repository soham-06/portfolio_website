const skills = [
  { name: "Python", display: "🐍", fontSize: 24 },
  { name: "C++", display: "C++", fontSize: 11 },
  { name: "SQL", display: "SQL", fontSize: 11 },
  { name: "FastAPI", display: "Fast\nAPI", fontSize: 10 },
  { name: "PostgreSQL", display: "🐘", fontSize: 20 },
  { name: "Git", display: null, isSvg: true },
  { name: "LLMs", display: "🤖", fontSize: 20 },
  { name: "n8n", display: "n8n", fontSize: 13 },
  { name: "Dify", display: "Dify", fontSize: 12 },
  { name: "Whisper", display: "🎙️", fontSize: 20 },
  { name: "HuggingFace", display: "🤗", fontSize: 20 },
  { name: "RAG", display: "RAG", fontSize: 11 },
];

const GitSvg = () => (
  <svg viewBox="0 0 24 24" fill="#F05032" width="28" height="28">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.645-.222 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.72.719-1.885.719-2.604 0-.516-.515-.658-1.26-.438-1.9l-2.48-2.48v6.53c.175.087.34.2.486.348.713.72.713 1.883 0 2.6-.72.72-1.886.72-2.604 0-.72-.717-.72-1.88 0-2.6.177-.178.383-.312.602-.394v-6.6c-.22-.082-.427-.218-.602-.394-.523-.522-.66-1.266-.442-1.902l-2.72-2.72L.456 10.93c-.604.605-.604 1.584 0 2.19l10.48 10.477c.604.604 1.582.604 2.186 0l10.424-10.477c.604-.606.604-1.585 0-2.19z" />
  </svg>
);

export default function Stack() {
  return (
    <section className="section" id="stack">
      <h2 className="sectionTitle">Stack</h2>
      <div className="stackGrid">
        {skills.map((s) => (
          <div key={s.name} className="stackItem">
            {s.isSvg ? (
              <GitSvg />
            ) : (
              <span style={{ fontSize: s.fontSize, fontWeight: 700, whiteSpace: "pre-line" }}>
                {s.display}
              </span>
            )}
            <span className="stackTooltip">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
