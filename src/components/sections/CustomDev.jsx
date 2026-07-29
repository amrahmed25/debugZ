import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";

export default function CustomDev() {
  return (
    <section id="custom" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal
        className="relative overflow-hidden rounded-[28px] px-8 sm:px-16 py-16 grid lg:grid-cols-2 gap-10 items-center"
        as="div"
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#FF6B00,#FF8A3D)" }} />
        <div
          className="absolute -top-20 -right-10 w-72 h-72 rounded-full opacity-20 float-y"
          style={{ background: "#fff" }}
        />
        <div className="relative">
          <h2 className="text-[2.1rem] font-extrabold tracking-tight text-white leading-tight">
            Need a Custom Software Project?
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Can&apos;t find what you&apos;re looking for? Tell us exactly what you need and our team will design and
            develop a professional solution tailored specifically for you.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-[16px] font-semibold bg-white transition-transform hover:-translate-y-0.5"
            style={{ color: "#FF6B00" }}
          >
            Request Custom Project <ArrowRight size={18} />
          </a>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full max-w-sm rounded-[20px] p-6 bg-white/95 backdrop-blur shadow-2xl float-slow">
            <div className="mono text-[0.72rem] leading-6" style={{ color: "#111827" }}>
              <div style={{ color: "#9CA3AF" }}>// your requirements</div>
              <div>
                <span style={{ color: "#FF6B00" }}>type</span> Project = {"{"}
              </div>
              <div className="pl-3">
                stack: <span style={{ color: "#22C55E" }}>&apos;custom&apos;</span>,
              </div>
              <div className="pl-3">
                timeline: <span style={{ color: "#22C55E" }}>&apos;flexible&apos;</span>,
              </div>
              <div className="pl-3">
                support: <span style={{ color: "#22C55E" }}>&apos;lifetime&apos;</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
