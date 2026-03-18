"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { photographyItems } from "@/data/site";
import { Container } from "./Container";
import { ImagePanel } from "./ImagePanel";
import { ScrollReveal } from "./ScrollReveal";

export function PhotographySection() {
  const [panelImage, setPanelImage] = useState<{ src: string; title: string } | null>(null);
  const [failed, setFailed] = useState<Set<string>>(new Set());

  return (
    <Container id="photography" className="py-24 sm:py-28">
      <div className="space-y-12">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            Photography
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Large, calm, and artistic — light, framing, and observation.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate">
            Since I first picked up a camera, photography has slowly become a way for me to observe the
            world. Unlike sketching, which asks me to linger, photography makes me decide in an instant
            what feels important enough to keep — a certain light, a particular emotion, or a scene that
            quietly resonates.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            My approach leans more toward feeling than technique. I don&apos;t chase perfect composition or
            equipment; what matters more is why I want to take the photograph. Often it&apos;s because a
            moment reminds me it will never come again. In that way, photography is a response to the
            present.
          </p>
          <p className="mt-3 text-base leading-8 text-slate">
            Over time, these images have formed a memory system that sits beside sketching. Sketching lets
            me reconstruct memory; photography feels like sealing it in place. When I revisit these photos,
            I don&apos;t just see the image — I remember the air, the sounds, and even the small thoughts
            passing through my mind. It gives otherwise passing moments another chance to be experienced.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {photographyItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setPanelImage({ src: item.image, title: item.title })}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-slate-100 text-left shadow-soft"
              >
                <div className="relative h-80 overflow-hidden sm:h-[26rem]">
                  {failed.has(item.image) ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                      onError={() => setFailed((prev) => new Set(prev).add(item.image))}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ImagePanel
        src={panelImage?.src ?? ""}
        alt={panelImage?.title ?? ""}
        isOpen={!!panelImage}
        onClose={() => setPanelImage(null)}
      />
    </Container>
  );
}
