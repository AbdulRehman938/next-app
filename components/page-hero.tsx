type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="mesh-bg border-b border-brand-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary">{label}</span>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-muted">{description}</p>
      </div>
    </section>
  );
}