import { FaPython, FaGitAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  SiCplusplus,
  SiPostgresql,
  SiFastapi,
  SiHuggingface,
  SiN8N,
  SiOpenai,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={24} /> },
  { name: "C++", icon: <SiCplusplus size={20} /> },
  { name: "SQL", icon: <SiMysql size={20} /> },
  { name: "Supabase", icon: <SiSupabase size={20} /> },
  { name: "FastAPI", icon: <SiFastapi size={20} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "Postman", icon: <SiPostman size={20} /> },
  { name: "Git", icon: <FaGitAlt size={24} /> },
  { name: "LLMs", icon: <SiOpenai size={24} /> },
  { name: "n8n", icon: <SiN8N size={20} /> },
  { name: "HuggingFace", icon: <SiHuggingface size={24} /> },
  { name: "RAG", icon: <FiSearch size={22} /> },
  { name: "MongoDB", icon: <SiMongodb size={20} /> },
];

export default function Stack() {
  return (
    <section className="section" id="stack">
      <h2 className="sectionTitle">Stack</h2>

      <div className="stackGrid">
        {skills.map((s) => (
          <div key={s.name} className="stackItem">
            {s.icon}
            <span className="stackTooltip">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}