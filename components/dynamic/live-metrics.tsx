"use client";

import { useEffect, useState } from "react";
import { getLiveMetrics, isBackendApiError, LiveMetrics } from "@/lib/backend-api";

export function LiveMetricsPanel() {
  const [metrics, setMetrics] = useState<LiveMetrics | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getLiveMetrics()
      .then((data) => {
        if (!active) return;
        setMetrics(data);
        setError(null);
      })
      .catch((err) => {
        if (!active) return;
        setMetrics(null);
        if (isBackendApiError(err)) {
          setError(err.message);
          return;
        }
        setError("Backend metrics unavailable. Start backend to view live data.");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mx-auto mb-10 max-w-6xl px-6 md:px-10">
      <div className="rounded-xl2 border border-brand-line bg-brand-card p-5 shadow-soft md:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">Live Backend Metrics</p>
        {metrics ? (
          <div className="mt-3 flex flex-wrap items-center gap-6 text-brand-muted">
            <p>
              Total inquiries: <span className="font-semibold text-brand-ink">{metrics.inquiryCount}</span>
            </p>
            <p>
              Latest inquiry: <span className="font-semibold text-brand-ink">{metrics.latestInquiryAt ? new Date(metrics.latestInquiryAt).toLocaleString() : "No inquiries yet"}</span>
            </p>
          </div>
        ) : (
          <p className="mt-3 text-brand-muted">{error ?? "Backend metrics unavailable. Start backend to view live data."}</p>
        )}
      </div>
    </div>
  );
}
