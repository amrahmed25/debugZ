import { Code2, Server, Layers, ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";

const CATEGORIES = [
  {
    icon: Code2,
    title: "Frontend Projects",
    cta: "Browse Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Responsive UI",
      "Dashboards",
      "Landing Pages",
    ],
  },
  {
    icon: Server,
    title: "Backend Projects",
    cta: "Browse Backend",
    items: [
      "Node.js",
      "Express",
      "Laravel",
      "NestJS",
      "REST APIs",
      "Authentication",
      "Database",
      "Admin Systems",
    ],
  },
  {
    icon: Layers,
    title: "Full Stack Projects",
    cta: "Browse Full Stack",
    items: [
      "React + Node",
      "Next.js + Laravel",
      "Authentication",
      "Dashboard",
      "Payment Integration",
      "Admin Panel",
      "Cloud Deployment",
    ],
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
          Pick your category
        </h2>
        <p className="mt-3 text-[1.05rem]" style={{ color: "#6B7280" }}>
          Every project ships with clean architecture and production-ready code.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-7">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div
              className="group h-full p-8 rounded-[22px] border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(255,107,0,0.35)]"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div
                className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: "linear-gradient(135deg,#FF6B00,#FF8A3D)" }}
              >
                <c.icon size={26} color="#fff" />
              </div>
              <h3 className="text-[1.25rem] font-bold" style={{ color: "#111827" }}>
                {c.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[0.9rem]" style={{ color: "#6B7280" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF6B00" }} /> {it}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-1.5 font-semibold text-[0.9rem]"
                style={{ color: "#FF6B00" }}
              >
                {c.cta} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
