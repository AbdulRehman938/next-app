import Link from "next/link";

type CtaPanelProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CtaPanel({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaPanelProps) {
  return (
    <div className="rounded-xl2 border border-brand-line bg-brand-card p-8 shadow-soft md:p-10">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 max-w-3xl text-brand-muted">{description}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="rounded-full border border-brand-line px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-primary"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}