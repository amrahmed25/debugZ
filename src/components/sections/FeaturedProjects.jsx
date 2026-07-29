import { Layers, Code2, Server, ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    icon: Layers,
    name: "Nimbus Admin Dashboard",
    category: "Full Stack",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    rating: "4.9",
    price: "$89",
    desc: "Analytics dashboard with auth, billing and role-based access built in.",
  },
  {
    icon: Code2,
    name: "Orbit Landing Kit",
    category: "Frontend",
    stack: ["React", "Tailwind"],
    rating: "4.8",
    price: "$39",
    desc: "A conversion-focused SaaS landing page kit with 12 responsive sections.",
  },
  {
    icon: Server,
    name: "Forge REST API",
    category: "Backend",
    stack: ["NestJS", "MongoDB"],
    rating: "5.0",
    price: "$59",
    desc: "Scalable REST API boilerplate with JWT auth and rate limiting.",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
              Featured projects
            </h2>
            <p className="mt-2 text-[1.05rem]" style={{ color: "#6B7280" }}>
              Hand-picked, code-reviewed, ready to deploy.
            </p>
          </div>
          <a href="#" className="font-semibold text-[0.9rem] flex items-center gap-1.5" style={{ color: "#FF6B00" }}>
            View all projects <ArrowRight size={16} />
          </a>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
