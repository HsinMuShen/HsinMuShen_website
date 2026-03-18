"use client";

import { Container } from "./Container";
import { ScrollReveal } from "./ScrollReveal";

const TRAVEL_VIDEO = {
  src: "/travel/sri_lanka01.mp4",
};

export function TravelSection() {
  return (
    <Container id="travel" className="py-24 sm:py-28">
      <div className="space-y-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            Travel video edit
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Moving through cities, landscapes, and quiet in-between moments.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            A week-long solo journey to Sri Lanka was the gift I gave myself for my twenty-seventh
            birthday. I explored many places on my own and encountered a wealth of fascinating people and
            experiences. Some moments were profoundly moving, leaving me with the striking sense that the
            meaning of my life was, somehow, to meet this very place and moment.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            I created this film in the hope of sharing, through moving images, the beauty and emotion I
            encountered, allowing them to take on a new form.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.1}>
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-black">
              <video
                className="aspect-video w-full rounded-2xl object-cover"
                controls
                preload="metadata"
                playsInline
              >
                <source src={TRAVEL_VIDEO.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  );
}

