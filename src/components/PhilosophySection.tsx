import { philosophy } from "@/data/site";
import { Container } from "./Container";

export function PhilosophySection() {
  return (
    <Container className="py-24 sm:py-28">
      <div className="overflow-hidden rounded-[2.5rem] border border-[#1e293b] bg-[#111827] px-8 py-10 text-white shadow-soft sm:px-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#fbbf24]">
              Philosophy
            </p>
            <blockquote className="font-serif text-3xl leading-tight sm:text-4xl">
              "{philosophy.quote}"
            </blockquote>
          </div>

          <div className="space-y-6">
            <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {philosophy.body}
            </p>
            <div className="grid gap-3">
              {philosophy.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/90"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
