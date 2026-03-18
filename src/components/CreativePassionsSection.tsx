import { creativePassions } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function CreativePassionsSection() {
  return (
    <Container id="passions" className="py-24 sm:py-28">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Creative Passions"
          title="A practice shaped by image-making, hand-drawn thinking, and digital craft."
          description="These creative threads are not separate hobbies sitting beside technical work. They actively shape how ideas are framed, refined, and brought to life."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {creativePassions.map((passion) => (
            <article
              key={passion.title}
              className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-soft backdrop-blur"
            >
              <div className={`h-40 bg-gradient-to-br ${passion.accent}`} />
              <div className="space-y-4 p-7">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-700">
                    {passion.subtitle}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-ink">
                    {passion.title}
                  </h3>
                </div>
                <p className="leading-7 text-slate">{passion.description}</p>
                <div className="h-px w-full bg-gradient-to-r from-brand-300 to-transparent transition duration-500 group-hover:translate-x-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
