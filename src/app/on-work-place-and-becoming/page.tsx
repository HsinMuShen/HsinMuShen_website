"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePanel } from "@/components/ImagePanel";

type StorySection = {
  title: string;
  paragraphs: string[];
  images: string[];
  variant: "split" | "splitReverse" | "gridFirst" | "band";
};

const sections: StorySection[] = [
  {
    title: "A way of understanding the world through making",
    paragraphs: [
      "Hi, I’m Hsin Mu.",
      "I’m a software engineer, and also someone who tries to understand the world through making.",
      "In my daily work, I build web systems. I think about structure, logic, and how things function. But outside of that, I also draw and take photos. These are slower ways of observing. They help me notice space, time, and small details that are easy to overlook.",
      "For me, these are not separate identities. They are simply different ways of engaging with the same question: how do we experience the world, and how do we give form to that experience?",
    ],
    images: [
      "/about_page/section_01/01.JPG",
      "/about_page/section_01/02.JPG",
    ],
    variant: "split",
  },
  {
    title: "Living abroad changed how I see place and time",
    paragraphs: [
      "A turning point for me was when I spent six months in Singapore as an exchange student. It was the first time I lived in a different cultural environment for an extended period.",
      "I began to understand that knowing a place does not come from simply visiting, but from living through its everyday moments.",
      "That was also when I began sketching. I wanted to record places not only visually, but through time and attention. Drawing became a way to slow down, to stay present, and to remember more deeply.",
    ],
    images: [
      "/about_page/section_02/01.JPG",
      "/about_page/section_02/02.jpg",
      "/about_page/section_02/03.jpg",
    ],
    variant: "splitReverse",
  },
  {
    title: "Traveling alone taught me openness and rhythm",
    paragraphs: [
      "Since then, I’ve traveled to more than ten countries, including several solo trips.",
      "Traveling alone pushed me to become more observant, more adaptive, and more open to uncertainty.",
      "For me, travel is not only about movement. It is also about learning how to enter new environments with humility, curiosity, and attention. Each place has expanded the way I see both the world and myself.",
    ],
    images: [
      "/about_page/section_03/01.jpg",
      "/about_page/section_03/02.JPG",
      "/about_page/section_03/03.JPG",
      "/about_page/section_03/04.jpeg",
    ],
    variant: "gridFirst",
  },
  {
    title: "Digital nomad experiences opened new possibilities",
    paragraphs: [
      "More recently, I spent time in Chiang Mai twice as a digital nomad.",
      "There, I met people from very different backgrounds, all experimenting with how they live and work. These experiences made me realize that work does not have to be tied to one place, and that lifestyle can be intentionally designed.",
      "What stayed with me most was not only the flexibility, but the possibility of shaping a life with greater awareness and freedom.",
    ],
    images: [
      "/about_page/section_04/01.jpeg",
      "/about_page/section_04/02.jpeg",
      "/about_page/section_04/03.jpeg",
    ],
    variant: "split",
  },
  {
    title: "Discovering another side of a place I already love",
    paragraphs: [
      "I have visited Japan several times and truly love the culture and people there.",
      "Most of my previous experiences, however, have been in large cities like Tokyo.",
      "This time, I want to experience a different side of Japan. Zushi feels like an opportunity to step away from the pace of the metropolis and enter a way of living that is quieter, slower, and more grounded in daily life.",
      "What draws me to Zushi is that it seems to exist between worlds. It is close to Tokyo, yet shaped by the sea, local community, and a different rhythm of living.",
      "I am especially interested in places like this, places where nature, work, and everyday life can coexist in a more balanced way.",
    ],
    images: [
      "/about_page/section_05/01.JPG",
      "/about_page/section_05/02.JPG",
      "/about_page/section_05/03.JPG",
    ],
    variant: "band",
  },
  {
    title: "Working, observing, and creating in daily life",
    paragraphs: [
      "During the program, I will continue my work as a software engineer, while also documenting my experience through sketching and photography.",
      "For me, these creative practices are ways of processing what I see and sharing what I experience.",
      "I hope to create visual and digital works that reflect what it feels like to live and work in Zushi, not only as a visitor, but as someone temporarily participating in its everyday rhythm.",
    ],
    images: [
      "/about_page/section_06/01.jpeg",
      "/about_page/section_06/02.jpeg",
    ],
    variant: "splitReverse",
  },
  {
    title: "A longer exploration of work, place, and life",
    paragraphs: [
      "I do not see this experience as a temporary escape, but as part of a longer exploration.",
      "I want to better understand how work, place, and life can be reconnected in more intentional ways.",
      "I also hope to bring my own perspective into the exchange, while remaining open to being changed by the people, rhythms, and stories I encounter along the way.",
    ],
    images: ["/about_page/section_07/01.JPG"],
    variant: "band",
  },
];

function ImageCard({
  src,
  title,
  images,
  onOpen,
  aspect = "aspect-[3/4]",
}: {
  src: string;
  title: string;
  images: string[];
  onOpen: (src: string, title: string, images: string[]) => void;
  aspect?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(src, title, images)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-soft sm:rounded-3xl ${aspect}`}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </motion.button>
  );
}

function TextContent({
  title,
  paragraphs,
  fullWidth = false,
}: {
  title: string;
  paragraphs: string[];
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "w-full" : "max-w-2xl"}>
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function StorySectionBlock({
  section,
  index,
  onOpen,
}: {
  section: StorySection;
  index: number;
  onOpen: (src: string, title: string, images: string[]) => void;
}) {
  // Section 1: text img01 img02
  if (index === 0) {
    return (
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr_0.8fr] lg:items-start">
        <TextContent title={section.title} paragraphs={section.paragraphs} />
        <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} />
        <ImageCard src={section.images[1]} title={section.title} images={section.images} onOpen={onOpen} />
      </section>
    );
  }

  // Section 2: row1 img01 text, row2 img02 img03
  if (index === 1) {
    return (
      <section className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} />
          <TextContent title={section.title} paragraphs={section.paragraphs} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <ImageCard src={section.images[1]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
          <ImageCard src={section.images[2]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
        </div>
      </section>
    );
  }

  // Section 3: text full width, then 2x2 images
  if (index === 2) {
    return (
      <section className="space-y-8">
        <TextContent title={section.title} paragraphs={section.paragraphs} fullWidth />
        <div className="grid gap-6 sm:grid-cols-2">
          <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} />
          <ImageCard src={section.images[1]} title={section.title} images={section.images} onOpen={onOpen} />
          <ImageCard src={section.images[2]} title={section.title} images={section.images} onOpen={onOpen} />
          <ImageCard src={section.images[3]} title={section.title} images={section.images} onOpen={onOpen} />
        </div>
      </section>
    );
  }

  // Section 4: text full width, then 3 images in a row
  if (index === 3) {
    return (
      <section className="space-y-8">
        <TextContent title={section.title} paragraphs={section.paragraphs} fullWidth />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
          <ImageCard src={section.images[1]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
          <ImageCard src={section.images[2]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
        </div>
      </section>
    );
  }

  // Section 5: text full width + img01 img02 img03
  if (index === 4) {
    return (
      <section className="space-y-8">
        <TextContent title={section.title} paragraphs={section.paragraphs} fullWidth />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
          <ImageCard src={section.images[1]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
          <ImageCard src={section.images[2]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[4/5]" />
        </div>
      </section>
    );
  }

  // Section 6: img01 + text
  if (index === 5) {
    return (
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} />
        <TextContent title={section.title} paragraphs={section.paragraphs} />
      </section>
    );
  }

  // Section 7: text full width + one large full-width image
  return (
    <section className="space-y-8">
      <TextContent title={section.title} paragraphs={section.paragraphs} fullWidth />
      <ImageCard src={section.images[0]} title={section.title} images={section.images} onOpen={onOpen} aspect="aspect-[16/9]" />
    </section>
  );
}

export default function OnWorkPlaceAndBecomingPage() {
  const [panelImage, setPanelImage] = useState<{
    src: string;
    title: string;
    images: string[];
    index: number;
  } | null>(null);

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <Container className="py-20 sm:py-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
            On Work, Place, and Becoming
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            On Work, Place, and Becoming
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate">
            A personal journey shaped by making, movement, and the search for a way of living
          </p>
        </ScrollReveal>
      </Container>

      <Container className="pb-24 sm:pb-28">
        <div className="space-y-16 sm:space-y-24">
          {sections.map((section, index) => (
            <ScrollReveal key={section.title} variant="default" delay={index * 0.06}>
              <div className="space-y-10">
                <StorySectionBlock
                  section={section}
                  index={index}
                  onOpen={(src, title, images) =>
                    setPanelImage({
                      src,
                      title,
                      images,
                      index: Math.max(0, images.indexOf(src)),
                    })
                  }
                />
                {index < sections.length - 1 ? (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                ) : null}
              </div>
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
                  return {
                    ...prev,
                    index: nextIndex,
                    src: prev.images[nextIndex],
                  };
                })
            : undefined
        }
        onNext={
          panelImage
            ? () =>
                setPanelImage((prev) => {
                  if (!prev) return prev;
                  const nextIndex = (prev.index + 1) % prev.images.length;
                  return {
                    ...prev,
                    index: nextIndex,
                    src: prev.images[nextIndex],
                  };
                })
            : undefined
        }
        onClose={() => setPanelImage(null)}
      />

      <Footer />
    </main>
  );
}

