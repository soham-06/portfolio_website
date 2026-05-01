const CapIcon = () => (
  <svg className="educationIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
  </svg>
);

const schools = [
  { degree: "B.E. in Computer Engineering", school: "Sinhgad College of Engineering, Pune", date: "11.2022 - 06.2026", score: "8.4 CGPA" },
  { degree: "Senior Secondary (PCM)", school: "Brijlal Biyani Science College, Amravati", date: "11.2020 - 04.2022", score: "State Board" },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="sectionTitle">Education</h2>
      <div className="educationList">
        {schools.map((s) => (
          <div key={s.school} className="educationItem">
            <CapIcon />
            <div className="educationContent">
              <p className="educationDegree">{s.degree}</p>
              <p className="educationSchool">{s.school}</p>
              <p className="educationDate">{s.date}</p>
            </div>
            <span className="educationScore">{s.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
