import Reveal from "../common/Reveal";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <Reveal
        className="text-center rounded-[28px] py-16 px-8"
        style={{ background: "linear-gradient(180deg,#FFF3EA,#FAFAFA)" }}
      >
        <h2 className="text-[2.2rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
          Ready to build your next project?
        </h2>
        <p className="mt-3 text-[1.05rem] max-w-xl mx-auto" style={{ color: "#6B7280" }}>
          Join hundreds of developers and businesses who trust DEBUGZ for premium software solutions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-[16px] text-white font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#FF6B00,#FF8A3D)",
              boxShadow: "0 14px 30px -10px rgba(255,107,0,0.55)",
            }}
          >
            Browse Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-[16px] font-semibold border bg-white"
            style={{ borderColor: "#E5E7EB", color: "#111827" }}
          >
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
