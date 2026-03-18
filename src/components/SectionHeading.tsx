type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-slate">{description}</p>
    </div>
  );
}
