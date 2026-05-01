const items = [
  { icon: "🏆", title: "Winner — AI Agon 2025", desc: "National-level hackathon for innovation and impact in the smart farming sector." },
  { icon: "🏆", title: "Winner — AI Agon 2026", desc: "National-level hackathon — back-to-back champion." },
  { icon: "🥈", title: "Finalist — Hackonomics 2025", desc: "Competitive hackathon showcasing full-stack and AI skills." },
  { icon: "💻", title: "250+ Problems Solved", desc: "Across Leetcode, Codeforces, CodeChef, and GeeksforGeeks." },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <h2 className="sectionTitle">Achievements</h2>
      <div className="achievementsGrid">
        {items.map((a) => (
          <div key={a.title} className="achievementCard">
            <div className="achievementIcon">{a.icon}</div>
            <h3 className="achievementTitle">{a.title}</h3>
            <p className="achievementDesc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
