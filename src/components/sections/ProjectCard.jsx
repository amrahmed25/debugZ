import { Star } from "lucide-react";
import Reveal from "../common/Reveal";

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
            <span className="text-[1.2rem] font-extrabold" style={{ color: "#111827" }}>
              {project.price}
            </span>
            <div className="flex gap-2">
              <a
                href="#"
                className="px-3.5 py-2 rounded-[10px] text-[0.8rem] font-semibold border"
                style={{ borderColor: "#E5E7EB", color: "#111827" }}
              >
                Details
              </a>
              <a
                href="#"
                className="px-3.5 py-2 rounded-[10px] text-[0.8rem] font-semibold text-white"
                style={{ background: "#FF6B00" }}
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
