"use client";

import Image from "next/image";
import { aboutStory } from "@/data/site";
import { Container } from "./Container";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <Container id="about" className="py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <ScrollReveal variant="scale" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-soft sm:rounded-3xl">
            <Image
              src={aboutStory.mainImage}
              alt={aboutStory.mainImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              {aboutStory.eyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">{aboutStory.title}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="max-w-xl space-y-4 text-base leading-8 text-slate">
              {aboutStory.shortBio
                .split(/\n\s*\n/)
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Container>
  );
}
