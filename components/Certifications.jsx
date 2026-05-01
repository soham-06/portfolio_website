const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const certs = [
  { provider: "IBM", name: "Getting Started with Enterprise Data Science" },
  { provider: "Stanford Online", name: "Supervised Machine Learning: Regression and Classification" },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="sectionTitle">Certifications</h2>
      <div className="certList">
        {certs.map((c) => (
          <div key={c.name} className="certItem">
            <DocIcon />
            <span><span className="certProvider">{c.provider}</span> — {c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
