import { skillGroups } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <Container id="skills" className="py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Tools and Abilities"
          title="A toolkit that moves comfortably between expressive ideas and production-ready execution."
          description="This section keeps the technical side visible without letting it dominate the entire identity. It is meant to support the story, not flatten it."
        />

        <div className="grid gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-canvas px-3 py-1 text-sm font-medium text-slate"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
