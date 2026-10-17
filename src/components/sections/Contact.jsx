import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Field from "../common/Field";
import InfoRow from "../common/InfoRow";

const initialFormData = {
  full_name: "",
  email: "",
  project_type: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSent(false);
    setError("");
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { full_name, email, project_type, budget, message } = formData;

  const subject = `New Contact Message from ${full_name} - DebugZ`;

  const body = [
    `Name: ${full_name}`,
    `Email: ${email}`,
    `Project Type: ${project_type}`,
    `Budget: ${budget}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const mailtoLink = `mailto:debugzseven@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  setSent(true);
};

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#fff" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-3">
          <h2
            className="text-[2.1rem] font-extrabold tracking-tight"
            style={{ color: "#111827" }}
          >
            Get in touch
          </h2>

          <p
            className="mt-3 text-[1.05rem] mb-8"
            style={{ color: "#6B7280" }}
          >
            Tell us about your project and we&apos;ll reply within one
            business day.
          </p>

          <form
            className="grid sm:grid-cols-2 gap-5"
            onSubmit={handleSubmit}
          >
            <Field
              label="Full Name"
              name="full_name"
              placeholder="Jane Doe"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

            <Field
              label="Email Address"
              name="email"
              placeholder="jane@company.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Field
              label="Project Type"
              name="project_type"
              placeholder="e.g. Full Stack"
              value={formData.project_type}
              onChange={handleChange}
              required
            />

            <Field
              label="Budget"
              name="budget"
              placeholder="e.g. $500 - $1000"
              value={formData.budget}
              onChange={handleChange}
              required
            />

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[0.8rem] font-semibold mb-2"
                style={{ color: "#111827" }}
              >
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us what you're building..."
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
                className="w-full rounded-[12px] border px-4 py-3 text-[0.9rem] outline-none transition-colors focus:border-[#FF6B00]"
                style={{ borderColor: "#E5E7EB" }}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="sm:col-span-2 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            {sent && (
              <p
                role="status"
                className="sm:col-span-2 text-sm text-green-600"
              >
                Your message has been sent successfully! We&apos;ll get
                back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="sm:col-span-2 px-7 py-3.5 rounded-[14px] text-white font-semibold w-fit transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg,#FF6B00,#FF8A3D)",
              }}
            >
              {sent ? "Opening your email app..." : "Send Message"}
            </button>
          </form>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={100}>
          <div
            className="rounded-[22px] border p-8 space-y-6"
            style={{
              borderColor: "#E5E7EB",
              background: "#FAFAFA",
            }}
          >
            <InfoRow
              icon={Mail}
              label="Email"
              value="debugzseven@gmail.com"
            />

            <InfoRow
              icon={Phone}
              label="Phone"
              value="+20 1222684842"
            />

            <InfoRow
              icon={MapPin}
              label="Location"
              value="Cairo, Egypt"
            />

            <InfoRow
              icon={Clock}
              label="Business Hours"
              value="Sun - Thu, 9am - 6pm"
            />

            <div className="flex gap-3 pt-2">
              {[Github, Twitter, Linkedin, MessageSquare].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={`Social link ${i + 1}`}
                    className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:border-[#FF6B00] hover:text-[#FF6B00]"
                    style={{
                      borderColor: "#E5E7EB",
                      color: "#374151",
                    }}
                  >
                    <Icon size={17} />
                  </a>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
