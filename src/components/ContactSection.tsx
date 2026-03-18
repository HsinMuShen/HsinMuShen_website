"use client";

import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";

    const body = [
      message.trim(),
      "",
      "---",
      `From: ${name.trim() || "(no name)"} <${email.trim() || "(no email)"}>`,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject || "Message from website")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <Container id="contact" className="py-24 sm:py-28">
      <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation about an idea, project, or collaboration."
            description="The tone here is open and personal. Use it for commissions, creative partnerships, product work, or a thoughtful hello."
          />

          <div className="space-y-4 text-base text-slate">
            <p>
              <span className="font-semibold text-ink">Email:</span>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-brand-700"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Location:</span>{" "}
              {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 rounded-[1.75rem] bg-canvas p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-ink">
            Subject
            <input
              name="subject"
              type="text"
              placeholder="A short subject"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Share a project, a concept, or what drew you to the work."
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
