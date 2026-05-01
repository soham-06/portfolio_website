const jobs = [
  {
    role: "Full Stack Developer",
    company: "Empire Global",
    dates: "Oct 2025 – Jan 2026",
    location: "Remote",
    points: [
      "Built AI-powered automation pipelines using Dify and n8n, enabling multi-source data ingestion and structured LLM inference",
      "Built end-to-end workflows integrating APIs, LLMs, and external data sources, improving automation efficiency",
      "Enhanced system resilience with caching layers, retry mechanisms, maintaining a 98%+ success rate",
      "Optimized full-stack performance, reducing API response times and load latency by 30%",
    ],
  },
  {
    role: "Intern",
    company: "dotCOM Infotech",
    dates: "Jan 2025 – Feb 2025",
    location: "Remote",
    points: [
      "Developed responsive ERP UI components improving usability across multiple workflows",
      "Implemented ASP.NET and MS-SQL modules to support dynamic and scalable data workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="sectionTitle">Experience</h2>
      <div className="experienceList">
        {jobs.map((j) => (
          <div key={j.company} className="experienceItem">
            <div className="experienceHeader">
              <div>
                <h3 className="experienceRole">{j.role}</h3>
                <p className="experienceCompany">{j.company}</p>
              </div>
              <div>
                <p className="experienceDates">{j.dates}</p>
                <p className="experienceLocation">{j.location}</p>
              </div>
            </div>
            <ul className="experienceDesc">
              {j.points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
