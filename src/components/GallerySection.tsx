import Image from "next/image";
import { galleryShowcase } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function GallerySection() {
  return (
    <Container id="gallery" className="py-24 sm:py-28">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Gallery"
          title="Visual placeholders for photography, sketches, and in-between experiments."
          description="This section is designed like a small exhibition wall. Replace these placeholders with real images later, or keep the abstract treatment for a more atmospheric presentation."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {galleryShowcase.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft ${
                index % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative min-h-[18rem] p-6 sm:min-h-[22rem]">
                <Image
                  src={item.image}
                  alt={`${item.title} placeholder artwork`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.style} opacity-20 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_30%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.32))]" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
                    {item.type}
                  </span>
                  <div className="max-w-md rounded-[1.5rem] bg-white/12 p-5 backdrop-blur-md">
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/85">{item.note}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
