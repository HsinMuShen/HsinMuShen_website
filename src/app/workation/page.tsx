"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { ImagePanel } from "@/components/ImagePanel";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";

type WorkationSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
};

const sections: WorkationSection[] = [
  {
    id: "amigo-house",
    eyebrow: "Home Base",
    title: "Amigo House",
    description:
      "A calm base for work, rest, conversations, and the small rituals that make a temporary place feel lived in.",
    images: [
      "/workation/Amigo House/R0025041.jpg",
      "/workation/Amigo House/R0025043.jpg",
      "/workation/Amigo House/R0025054.jpg",
      "/workation/Amigo House/R0025055.jpg",
      "/workation/Amigo House/R0025057.jpg",
      "/workation/Amigo House/R0025058.JPG",
      "/workation/Amigo House/R0025390.JPG",
    ],
  },
  {
    id: "city",
    eyebrow: "City",
    title: "Moving Through Town",
    description:
      "Street corners, facades, signs, railway moments, and daily routes gathered while learning the pace of the city.",
    images: [
      "/workation/city/R0025046.jpg",
      "/workation/city/R0025047.jpg",
      "/workation/city/R0025048.jpg",
      "/workation/city/R0025050.jpg",
      "/workation/city/R0025068.JPG",
      "/workation/city/R0025082.jpg",
      "/workation/city/R0025110.jpg",
      "/workation/city/R0025155.jpg",
      "/workation/city/R0025161.JPG",
      "/workation/city/R0025170.JPG",
      "/workation/city/R0025182.jpg",
      "/workation/city/R0025187.jpg",
      "/workation/city/R0025195.jpg",
      "/workation/city/R0025204.jpg",
      "/workation/city/R0025281.jpg",
      "/workation/city/R0025288.jpg",
      "/workation/city/R0025307.jpg",
      "/workation/city/R0025315.jpg",
      "/workation/city/R0025319.JPG",
      "/workation/city/R0025321.JPG",
      "/workation/city/R0025323.jpg",
      "/workation/city/R0025330.JPG",
      "/workation/city/R0025348.JPG",
      "/workation/city/R0025349.JPG",
      "/workation/city/R0025350.jpg",
      "/workation/city/R0025359.jpg",
      "/workation/city/R0025361.jpg",
      "/workation/city/R0025405.JPG",
      "/workation/city/R0025406.JPG",
      "/workation/city/R0025410.JPG",
      "/workation/city/R0025412.JPG",
    ],
  },
  {
    id: "life",
    eyebrow: "Life",
    title: "Days Between Work Sessions",
    description:
      "The in-between time: walks, rooms, tables, friends, quiet pauses, and all the loose edges around focused work.",
    images: [
      "/workation/life/50BB1CC2-B4B6-4285-9CDB-582FE8ED9CB3.JPG",
      "/workation/life/924DD61C-2BA2-416F-A161-E4946940692F.JPG",
      "/workation/life/DD93F4C1-E270-4E5E-AD45-299A1B993D12.JPG",
      "/workation/life/DE712A8E-5AE2-4276-B423-BAAA979AD3A6.JPG",
      "/workation/life/IMG_2255.JPG",
      "/workation/life/IMG_2258.JPG",
      "/workation/life/IMG_2270.JPG",
      "/workation/life/P7047811.JPG",
      "/workation/life/R0025071.jpg",
      "/workation/life/R0025076.JPG",
      "/workation/life/R0025077.jpg",
      "/workation/life/R0025089.JPG",
      "/workation/life/R0025113.JPG",
      "/workation/life/R0025197.jpg",
      "/workation/life/R0025202.jpg",
      "/workation/life/R0025340.JPG",
      "/workation/life/R0025341.JPG",
      "/workation/life/R0025386.JPG",
    ],
  },
  {
    id: "nature",
    eyebrow: "Nature",
    title: "Air, Water, and Distance",
    description:
      "A slower register of the trip, where the landscape makes space for attention and the working day softens at the edges.",
    images: [
      "/workation/nature/R0025103.jpg",
      "/workation/nature/R0025104.JPG",
      "/workation/nature/R0025291.JPG",
      "/workation/nature/R0025293.jpg",
      "/workation/nature/R0025313.jpg",
      "/workation/nature/R0025314.JPG",
      "/workation/nature/R0025379.jpg",
      "/workation/nature/R0025392.JPG",
      "/workation/nature/R0025397.JPG",
      "/workation/nature/R0025408.JPG",
      "/workation/nature/R0025425.JPG",
      "/workation/nature/R0025426.JPG",
      "/workation/nature/R0025430.JPG",
      "/workation/nature/R0025431.JPG",
    ],
  },
  {
    id: "food",
    eyebrow: "Food",
    title: "Meals and Small Discoveries",
    description:
      "Food as a record of arrival: a table, a flavor, a brief stop that becomes part of the memory of place.",
    images: [
      "/workation/food/R0025067.JPG",
      "/workation/food/R0025074.jpg",
      "/workation/food/R0025097.JPG",
      "/workation/food/R0025107.jpg",
      "/workation/food/R0025125.JPG",
      "/workation/food/R0025398.JPG",
    ],
  },
  {
    id: "sketches",
    eyebrow: "Sketches",
    title: "Drawing as a Way to Stay",
    description:
      "Sketches and reference moments from the trip, holding attention longer than a passing glance would allow.",
    images: [
      "/workation/sketches/R0025010.jpg",
      "/workation/sketches/R0025063.jpg",
      "/workation/sketches/R0025081.jpg",
      "/workation/sketches/R0025132.JPG",
      "/workation/sketches/R0025133.JPG",
      "/workation/sketches/R0025164.jpg",
      "/workation/sketches/R0025191.jpg",
      "/workation/sketches/R0025220.jpg",
      "/workation/sketches/R0025345.jpg",
      "/workation/sketches/R0025353.JPG",
    ],
  },
];

const featuredImages = [
  {
    src: "/workation/nature/R0025430.JPG",
    aspect: "col-span-2 aspect-[16/10]",
  },
  {
    src: "/workation/Amigo House/R0025055.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/workation/city/R0025315.jpg",
    aspect: "aspect-[4/5]",
  },
];

const landscapeImages = new Set([
  "/workation/Amigo House/R0025057.jpg",
  "/workation/Amigo House/R0025058.JPG",
  "/workation/Amigo House/R0025390.JPG",
  "/workation/city/R0025155.jpg",
  "/workation/city/R0025170.JPG",
  "/workation/city/R0025204.jpg",
  "/workation/city/R0025307.jpg",
  "/workation/city/R0025319.JPG",
  "/workation/city/R0025321.JPG",
  "/workation/city/R0025323.jpg",
  "/workation/city/R0025348.JPG",
  "/workation/city/R0025349.JPG",
  "/workation/city/R0025412.JPG",
  "/workation/food/R0025067.JPG",
  "/workation/food/R0025074.jpg",
  "/workation/food/R0025097.JPG",
  "/workation/food/R0025107.jpg",
  "/workation/food/R0025125.JPG",
  "/workation/food/R0025398.JPG",
  "/workation/life/50BB1CC2-B4B6-4285-9CDB-582FE8ED9CB3.JPG",
  "/workation/life/924DD61C-2BA2-416F-A161-E4946940692F.JPG",
  "/workation/life/DE712A8E-5AE2-4276-B423-BAAA979AD3A6.JPG",
  "/workation/life/IMG_2255.JPG",
  "/workation/life/IMG_2258.JPG",
  "/workation/life/IMG_2270.JPG",
  "/workation/life/P7047811.JPG",
  "/workation/life/R0025076.JPG",
  "/workation/life/R0025077.jpg",
  "/workation/life/R0025089.JPG",
  "/workation/life/R0025113.JPG",
  "/workation/life/R0025341.JPG",
  "/workation/life/R0025386.JPG",
  "/workation/nature/R0025103.jpg",
  "/workation/nature/R0025104.JPG",
  "/workation/nature/R0025291.JPG",
  "/workation/nature/R0025379.jpg",
  "/workation/nature/R0025392.JPG",
  "/workation/nature/R0025430.JPG",
  "/workation/nature/R0025431.JPG",
  "/workation/sketches/R0025081.jpg",
  "/workation/sketches/R0025132.JPG",
  "/workation/sketches/R0025133.JPG",
  "/workation/sketches/R0025164.jpg",
  "/workation/sketches/R0025220.jpg",
  "/workation/sketches/R0025345.jpg",
]);

function getAspectClass(src: string) {
  return landscapeImages.has(src) ? "aspect-[3/2]" : "aspect-[2/3]";
}

function GalleryButton({
  src,
  title,
  index,
  onOpen,
}: {
  src: string;
  title: string;
  index: number;
  onOpen: (src: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  const aspect = getAspectClass(src);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(src)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.015, 0.12),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-soft sm:rounded-3xl ${aspect}`}
    >
      <Image
        src={src}
        alt={`${title} ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/28 to-transparent opacity-0 transition group-hover:opacity-100" />
    </motion.button>
  );
}

function WorkationSectionBlock({
  section,
  onOpen,
}: {
  section: WorkationSection;
  onOpen: (src: string, images: string[], title: string) => void;
}) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="mb-8 grid gap-6 border-t border-slate-200 pt-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {section.title}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate lg:justify-self-end">
          {section.description}
        </p>
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {section.images.map((src, index) => (
          <GalleryButton
            key={src}
            src={src}
            title={section.title}
            index={index}
            onOpen={(image) => onOpen(image, section.images, section.title)}
          />
        ))}
      </div>
    </section>
  );
}

export default function WorkationPage() {
  const [panelImage, setPanelImage] = useState<{
    src: string;
    title: string;
    images: string[];
    index: number;
  } | null>(null);

  const allImages = useMemo(() => sections.flatMap((section) => section.images), []);

  const openPanel = (src: string, images = allImages, title = "Workation") => {
    setPanelImage({
      src,
      title,
      images,
      index: Math.max(0, images.indexOf(src)),
    });
  };

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <Container className="py-16 sm:py-20">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                Workation
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                Work, travel, and the quiet rhythm between them.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate">
                A visual journal from a workation: the house that held the routine, the city that
                shaped the walks, the meals, sketches, landscapes, and everyday moments that turned
                remote work into a fuller way of observing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {featuredImages.map(({ src, aspect }, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openPanel(src)}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft sm:rounded-3xl ${aspect}`}
                >
                  <Image
                    src={src}
                    alt={`Workation featured image ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>

      <Container className="pb-8">
        <ScrollReveal variant="fade">
          <div className="flex gap-3 overflow-x-auto border-y border-slate-200 py-4 scrollbar-hide">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate shadow-sm hover:border-brand-300 hover:text-brand-700"
              >
                {section.eyebrow}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      <Container className="pb-24 sm:pb-28">
        <div className="space-y-16 sm:space-y-24">
          {sections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 0.04} amount={0.01}>
              <WorkationSectionBlock section={section} onOpen={openPanel} />
            </ScrollReveal>
          ))}
        </div>
      </Container>

      <ImagePanel
        src={panelImage?.src ?? ""}
        alt={panelImage?.title ?? ""}
        isOpen={!!panelImage}
        onPrev={
          panelImage
            ? () =>
                setPanelImage((prev) => {
                  if (!prev) return prev;
                  const nextIndex =
                    (prev.index - 1 + prev.images.length) % prev.images.length;
                  return { ...prev, index: nextIndex, src: prev.images[nextIndex] };
                })
            : undefined
        }
        onNext={
          panelImage
            ? () =>
                setPanelImage((prev) => {
                  if (!prev) return prev;
                  const nextIndex = (prev.index + 1) % prev.images.length;
                  return { ...prev, index: nextIndex, src: prev.images[nextIndex] };
                })
            : undefined
        }
        onClose={() => setPanelImage(null)}
      />

      <Footer />
    </main>
  );
}
