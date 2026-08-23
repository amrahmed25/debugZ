import { Layout, Globe, Code2, Server, TestTube2, Settings2, ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import ProjectCard from "./ProjectCard";

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