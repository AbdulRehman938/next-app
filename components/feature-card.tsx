type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft">
      <div className="mb-4 h-2 w-16 rounded-full bg-brand-accent" />
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-brand-muted">{description}</p>
    </article>
  );
}