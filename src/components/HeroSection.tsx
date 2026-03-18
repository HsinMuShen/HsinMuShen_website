"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "./Container";

export function HeroSection() {
  const heroFooter = (siteConfig as any).heroFooter as string | undefined;

  return (
    <Container id="top" className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-hero-grid opacity-60" />
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate"
          >
            {siteConfig.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {siteConfig.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base leading-8 text-slate"
          >
            {siteConfig.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-3 text-base leading-8 text-slate"
          >
            {(siteConfig.heroParagraphs ?? []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {heroFooter ? (
              <p className="font-medium text-ink">{heroFooter}</p>
            ) : null}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              About
            </a>
            <a
              href="#website"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              Web work
            </a>
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate transition hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-soft sm:rounded-3xl">
            <Image
              src="/about/about-portrait.jpeg"
              alt="About portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
