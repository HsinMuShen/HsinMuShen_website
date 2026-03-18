"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sketchingItems } from "@/data/site";
import { Container } from "./Container";
import { ImagePanel } from "./ImagePanel";
import { ScrollReveal } from "./ScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/nomad_sketching/";
const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60", "h-44", "h-68", "h-56"];

export function SketchingSection() {
  const [panelImage, setPanelImage] = useState<{ src: string; caption: string } | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  return (
    <Container id="sketching" className="py-24 sm:py-28">
      <div className="space-y-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            Sketching
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Six years of sketching, memory, and place.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            It has been six years since I began treating sketching as a hobby. In that time I graduated,
            started my first job, changed careers, and settled into a new role — time passed quickly, but
            these drawings quietly recorded the journey. I don&apos;t follow strict rules; the only one is
            to draw places I&apos;ve actually visited. Spaces I&apos;ve walked through, where I&apos;ve
            built memories and had real interactions, are the ones that carry enough meaning to draw.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            These sketches have become part of who I am. Looking at them, I can immediately recall how it
            felt to stand in those environments — the atmosphere, my emotions, and the small stories
            behind each scene. Many experiences would naturally fade, but sketching preserves those details
            and gives me a sense of grounding amid the busyness and constant change of life. More sketches
            live on{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 underline decoration-brand-400 underline-offset-2 transition hover:text-brand-700"
            >
              Instagram
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.1}>
          <div className="columns-2 gap-4 sm:columns-3 md:gap-6 lg:columns-4">
            {sketchingItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setPanelImage({ src: item.image, caption: item.caption })}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-4 w-full break-inside-avoid text-left md:mb-6"
              >
                <div
                  className={`group relative w-full overflow-hidden rounded-xl bg-slate-100 ${heights[index % heights.length]} shadow-md transition hover:shadow-lg`}
                >
                  {failedImages.has(item.image) ? (
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized={item.image.includes("favorite-sky") || item.image.includes("wanhua-circular-community")}
                      onError={() => setFailedImages((prev) => new Set(prev).add(item.image))}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white opacity-0 drop-shadow-md transition duration-300 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ImagePanel
        src={panelImage?.src ?? ""}
        alt={panelImage?.caption ?? ""}
        caption={panelImage?.caption}
        isOpen={!!panelImage}
        onClose={() => setPanelImage(null)}
      />
    </Container>
  );
}
