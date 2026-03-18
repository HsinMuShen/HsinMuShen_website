"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { webProjects } from "@/data/site";
import { Container } from "./Container";
import { ScrollReveal } from "./ScrollReveal";

export function WebsiteSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <Container id="website" className="py-24 sm:py-28">
      <div className="space-y-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            Web development
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Turning ideas into interfaces people can feel and use.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            Exploring web development has become more than learning syntax or tools. It&apos;s a way to turn
            abstract ideas into something tangible — a space where structure, interaction, and mood come
            together so other people can move through them.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            I try to balance practicality and expression. It isn&apos;t enough for a website to simply work;
            I want the flow to feel clear and intuitive, and for the interface to quietly communicate what
            it needs to. In that sense, writing code feels closer to having a conversation than just solving
            a problem.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            Unlike sketching and photography, which hold onto the past, web development feels like building
            small pieces of the future. Each project becomes a snapshot of how I was thinking at the time —
            what I valued, how I organized information, and the experiences I wanted to create. Together,
            they form a record of both technical growth and personal perspective.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.1}>
          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide md:gap-8"
              style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
            >
              {webProjects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-w-[280px] max-w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl sm:min-w-[300px]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="320px"
                      unoptimized={project.image.endsWith(".gif")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{project.description}</p>
                    {project.link !== "#" && (
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 transition group-hover:translate-x-1">
                        Visit site →
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-3 md:justify-end">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-40"
                aria-label="Previous"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-40"
                aria-label="Next"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  );
}
