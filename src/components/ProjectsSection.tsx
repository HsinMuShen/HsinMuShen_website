import { technicalProjects } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <Container id="projects" className="py-24 sm:py-28">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Web and Software"
          title="Technical work presented with the same care as creative work."
          description="These projects show how visual sensitivity and engineering discipline can live in the same system. Replace the placeholder summaries with real builds, metrics, and case study links."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {technicalProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-300"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
                  {project.category}
                </span>
                <span className="text-sm text-slate">0{index + 1}</span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-ink">{project.title}</h3>
                <p className="text-base leading-7 text-slate">{project.summary}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-8 inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:translate-x-1"
              >
                View Project Story
              </a>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
