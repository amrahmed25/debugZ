const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "NestJS",
  "Laravel",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Git",
  "GitHub",
];

export default function TechStack() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-14 border-y" style={{ borderColor: "#E5E7EB", background: "#fff" }}>
      <p
        className="text-center text-[0.85rem] font-semibold tracking-wide uppercase mb-7"
        style={{ color: "#9CA3AF" }}
      >
        Built with the technologies you already trust
      </p>
      <div className="relative overflow-hidden">
        <div className="flex gap-3 w-max marquee-track px-3">
          {doubled.map((t, i) => (
            <span
              key={i}
              className="px-5 py-2.5 rounded-full text-[0.85rem] font-semibold border whitespace-nowrap"
              style={{ borderColor: "#E5E7EB", color: "#111827", background: "#FAFAFA" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
