import { Star } from "lucide-react";
import Reveal from "../common/Reveal";

const PROJECTS = [
  {
    icon: Layout,
    name: "Landing Page",
    category: "Landing Page",
    stack: ["HTML", "CSS", "JavaScript"],
    rating: "4.9",
    originalPrice: "$55",
    price: "$50",
    desc: "A fast, conversion-focused landing page tailored to your brand.",
  },
  {
    icon: Globe,
    name: "WordPress Website",
    category: "WordPress",
    stack: ["WordPress", "PHP"],
    rating: "4.8",
    originalPrice: "$220",
    price: "$200",
    desc: "A fully set up WordPress site with custom theme and plugins.",
  },
  {
    icon: Code2,
    name: "Complete Frontend Project",
    category: "Frontend",
    stack: ["React", "Tailwind"],
    rating: "5.0",
    originalPrice: "$264",
    price: "$240",
    desc: "A full frontend build with responsive UI and clean component structure.",
  },
  {
    icon: Server,
    name: "Full-Stack Website",
    category: "Full Stack",
    stack: ["Next.js", "Node.js", "MongoDB"],
    rating: "4.9",
    originalPrice: "$660",
    price: "$600",
    desc: "End-to-end web app with frontend, backend, database and auth included.",
  },
  {
    icon: TestTube2,
    name: "Testing & QA",
    category: "Testing",
    stack: ["Jest", "Cypress"],
    rating: "4.8",
    originalPrice: "$110",
    price: "$100",
    desc: "Thorough testing and QA pass for your existing web app or feature.",
  },
  {
    icon: Settings2,
    name: "Custom Project",
    category: "Custom",
    stack: ["Your Stack"],
    rating: "5.0",
    originalPrice: null,
    price: "Custom Quote",
    desc: "Got something specific in mind? Price depends on scope and requirements.",
  },
];

export default function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        className="group rounded-[22px] border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(17,24,39,0.18)]"
        style={{ borderColor: "#E5E7EB" }}
      >
        <div
          className="h-44 relative flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg,#FFF3EA,#FFE3CC)" }}
        >
          <project.icon size={46} color="#FF6B00" className="transition-transform duration-300 group-hover:scale-110" />
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-white"
            style={{ color: "#111827" }}
          >
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-[1.05rem]" style={{ color: "#111827" }}>
              {project.name}
            </h3>
            <span className="flex items-center gap-1 text-[0.8rem] font-semibold shrink-0" style={{ color: "#111827" }}>
              <Star size={14} fill="#FF6B00" color="#FF6B00" /> {project.rating}
            </span>
          </div>
          <p className="mt-2 text-[0.875rem] leading-relaxed" style={{ color: "#6B7280" }}>
            {project.desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full text-[0.7rem] font-medium"
                style={{ background: "#F3F4F6", color: "#374151" }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              {project.originalPrice && (
                <span className="text-[0.9rem] font-medium line-through" style={{ color: "#9CA3AF" }}>
                  {project.originalPrice}
                </span>
              )}
              <span className="text-[1.2rem] font-extrabold" style={{ color: "#111827" }}>
                {project.price}
              </span>
            </div>
            <div className="flex gap-2">
                <a>
                href="#"
                className="px-3.5 py-2 rounded-[10px] text-[0.8rem] font-semibold border"
                style={{ borderColor: "#E5E7EB", color: "#111827" }}
              
                Details
              </a>
              
                href="#"
                className="px-3.5 py-2 rounded-[10px] text-[0.8rem] font-semibold text-white"
                style={{ background: "#FF6B00" }}
              <a>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}