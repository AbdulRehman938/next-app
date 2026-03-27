"use client";

import { useEffect, useState } from "react";
import { AboutValue, getAboutValues, isBackendApiError } from "@/lib/backend-api";

export function AboutValuesList() {
  const [values, setValues] = useState<AboutValue[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getAboutValues()
      .then((data) => {
        if (!active) return;
        setValues(data);
      })
      .catch((error) => {
        if (!active) return;
        if (isBackendApiError(error)) {
          setError(error.message);
          return;
        }
        setError("Unable to load values from backend right now.");
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return <p className="text-brand-muted">{error}</p>;
  }

  if (!values.length) {
    return <p className="text-brand-muted">Loading values...</p>;
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {values.map((value) => (
        <article key={value.title} className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft">
          <h3 className="text-xl font-semibold">{value.title}</h3>
          <p className="mt-3 text-brand-muted">{value.description}</p>
        </article>
      ))}
    </div>
  );
}
