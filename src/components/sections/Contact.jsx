import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";
import Reveal from "../common/Reveal";
import Field from "../common/Field";
import InfoRow from "../common/InfoRow";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-3">
          <h2 className="text-[2.1rem] font-extrabold tracking-tight" style={{ color: "#111827" }}>
            Get in touch
          </h2>
          <p className="mt-3 text-[1.05rem] mb-8" style={{ color: "#6B7280" }}>
            Tell us about your project and we&apos;ll reply within one business day.
          </p>
          <form
            className="grid sm:grid-cols-2 gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Full Name" placeholder="Jane Doe" />
            <Field label="Email Address" placeholder="jane@company.com" type="email" />
            <Field label="Project Type" placeholder="e.g. Full Stack" />
            <Field label="Budget" placeholder="e.g. $500 - $1000" />
            <div className="sm:col-span-2">
              <label className="block text-[0.8rem] font-semibold mb-2" style={{ color: "#111827" }}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you're building..."
                className="w-full rounded-[12px] border px-4 py-3 text-[0.9rem] outline-none transition-colors focus:border-[#FF6B00]"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>
            <button
              type="submit"
              className="sm:col-span-2 px-7 py-3.5 rounded-[14px] text-white font-semibold w-fit transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#FF6B00,#FF8A3D)" }}
            >
              {sent ? "Message sent ✓" : "Send Message"}
            </button>
          </form>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={100}>
          <div className="rounded-[22px] border p-8 space-y-6" style={{ borderColor: "#E5E7EB", background: "#FAFAFA" }}>
            <InfoRow icon={Mail} label="Email" value="hello@debugz.dev" />
            <InfoRow icon={Phone} label="Phone" value="+20 100 123 4567" />
            <InfoRow icon={MapPin} label="Location" value="Cairo, Egypt" />
            <InfoRow icon={Clock} label="Business Hours" value="Sun - Thu, 9am - 6pm" />
            <div className="flex gap-3 pt-2">
              {[Github, Twitter, Linkedin, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                  style={{ borderColor: "#E5E7EB", color: "#374151" }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
