import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  ShoppingCart,
  GitBranch,
  Search,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { icon: Layers, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Projects" },
  { icon: GitBranch, label: "Deployments" },
  { icon: Search, label: "Analytics" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-6">
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)" }}
      />
      <div
        className="absolute top-40 -left-52 w-[420px] h-[420px] rounded-full opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,138,61,0.16), transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold mb-6"
            style={{ background: "#FFF3EA", color: "#FF6B00", border: "1px solid #FFD9B8" }}
          >
            <Sparkles size={14} /> Trusted by 900+ developers & teams
          </div>
          <h1
            className="text-[2.75rem] sm:text-[3.4rem] leading-[1.05] font-extrabold tracking-tight"
            style={{ color: "#111827" }}
          >
            Build Faster with <span style={{ color: "#FF6B00" }}>Premium</span> Software Projects.
          </h1>
          <p className="mt-6 text-[1.1rem] leading-relaxed max-w-xl" style={{ color: "#6B7280" }}>
            Discover high-quality Frontend, Backend, and Full Stack projects built using the latest
            technologies — or request a custom solution tailored specifically to your business.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-[16px] text-white font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#FF6B00,#FF8A3D)",
                boxShadow: "0 14px 30px -10px rgba(255,107,0,0.55)",
              }}
            >
              Explore Projects <ArrowRight size={18} />
            </a>
            <a
              href="#custom"
              className="px-7 py-3.5 rounded-[16px] font-semibold border transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#E5E7EB", color: "#111827", background: "#fff" }}
            >
              Request Custom Project
            </a>
          </div>
          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.875rem]"
            style={{ color: "#6B7280" }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} color="#22C55E" /> Production-ready code
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} color="#22C55E" /> Lifetime updates
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} color="#22C55E" /> 24/7 support
            </span>
          </div>
        </div>

        <div className="relative float-slow">
          <div
            className="rounded-[24px] overflow-hidden border shadow-[0_30px_70px_-25px_rgba(17,24,39,0.25)]"
            style={{ borderColor: "#E5E7EB", background: "#fff" }}
          >
            <div
              className="flex items-center gap-2 px-5 py-3.5 border-b"
              style={{ borderColor: "#E5E7EB", background: "#F9FAFB" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF6B00" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFD9B8" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#E5E7EB" }} />
              <span className="ml-3 text-[0.75rem] font-medium" style={{ color: "#9CA3AF" }}>
                debugz-dashboard — main
              </span>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-2 p-4 border-r space-y-1" style={{ borderColor: "#E5E7EB" }}>
                {SIDEBAR_ITEMS.map((it) => (
                  <div
                    key={it.label}
                    className="flex items-center gap-2 text-[0.78rem] font-medium px-3 py-2 rounded-[10px]"
                    style={it.active ? { background: "#FFF3EA", color: "#FF6B00" } : { color: "#6B7280" }}
                  >
                    <it.icon size={14} /> {it.label}
                  </div>
                ))}
              </div>
              <div className="col-span-3 p-4">
                <div
                  className="mono text-[0.7rem] leading-5 rounded-[12px] p-3.5"
                  style={{ background: "#111827", color: "#E5E7EB" }}
                >
                  <div>
                    <span style={{ color: "#FF8A3D" }}>const</span> project ={" "}
                    <span style={{ color: "#22C55E" }}>&apos;debugz-api&apos;</span>;
                  </div>
                  <div>
                    <span style={{ color: "#FF8A3D" }}>function</span> deploy() {"{"}
                  </div>
                  <div className="pl-3">
                    status.set(<span style={{ color: "#22C55E" }}>&apos;live&apos;</span>);
                  </div>
                  <div>{"}"}</div>
                </div>
                <div
                  className="mt-3 flex items-center justify-between text-[0.72rem] font-semibold"
                  style={{ color: "#22C55E" }}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full glow-pulse" style={{ background: "#22C55E" }} /> Build
                    passing
                  </span>
                  <span style={{ color: "#9CA3AF" }}>2m ago</span>
                </div>
                <div
                  className="mt-3 h-16 rounded-[10px]"
                  style={{ background: "linear-gradient(180deg, rgba(255,107,0,0.14), transparent)" }}
                >
                  <svg viewBox="0 0 200 60" className="w-full h-full">
                    <polyline
                      points="0,45 30,38 60,42 90,20 120,28 150,10 180,18 200,6"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-6 -left-8 hidden sm:flex items-center gap-2 px-4 py-3 rounded-[16px] border shadow-lg float-y"
            style={{ background: "#fff", borderColor: "#E5E7EB" }}
          >
            <ShieldCheck size={18} color="#22C55E" />
            <div className="leading-tight">
              <div className="text-[0.75rem] font-semibold" style={{ color: "#111827" }}>
                Verified Code
              </div>
              <div className="text-[0.68rem]" style={{ color: "#6B7280" }}>
                Reviewed & tested
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
