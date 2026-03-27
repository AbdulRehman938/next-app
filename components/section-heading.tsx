type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="text-lg leading-relaxed text-brand-muted">{description}</p>
    </div>
  );
}