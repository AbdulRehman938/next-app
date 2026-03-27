"use client";

import { FormEvent, useState } from "react";
import { isBackendApiError, submitInquiry } from "@/lib/backend-api";

type SubmitState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  details?: string;
};

function pickFirstError(errors: string[] | undefined, fallback: string) {
  if (!errors || errors.length === 0) {
    return fallback;
  }
  return errors[0];
}

function normalizeUnknownErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    if (error.message.includes("Failed to fetch") || error.message.includes("fetch failed")) {
      return "Cannot reach backend API. Check NEXT_PUBLIC_BACKEND_URL and backend CORS_ORIGIN settings.";
    }
    return error.message;
  }

  return "Unexpected frontend error occurred while sending inquiry.";
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    setFieldErrors({});

    if (!name || !email || !details) {
      setState("error");
      setMessage("Please complete all fields.");
      return;
    }

    try {
      setState("submitting");
      setMessage("");

      await submitInquiry({ name, email, details });
      form.reset();
      setState("success");
      setMessage("Inquiry sent successfully. We will get back to you soon.");
    } catch (error) {
      setState("error");

      if (isBackendApiError(error)) {
        if (error.statusCode === 0) {
          setMessage("Cannot reach backend API. Check NEXT_PUBLIC_BACKEND_URL and backend CORS_ORIGIN settings.");
        } else {
          setMessage(error.message || "Submission failed.");
        }

        setFieldErrors({
          name: pickFirstError(error.fieldErrors?.name, ""),
          email: pickFirstError(error.fieldErrors?.email, ""),
          details: pickFirstError(error.fieldErrors?.details, ""),
        });
        return;
      }

      setMessage(normalizeUnknownErrorMessage(error));
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft md:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-brand-ink">
          Name
          <input
            type="text"
            name="name"
            className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
            placeholder="Jane Doe"
            required
          />
          {fieldErrors.name ? <span className="text-xs text-rose-600">{fieldErrors.name}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-ink">
          Email
          <input
            type="email"
            name="email"
            className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
            placeholder="jane@company.com"
            required
          />
          {fieldErrors.email ? <span className="text-xs text-rose-600">{fieldErrors.email}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-ink">
          Project details
          <textarea
            name="details"
            rows={5}
            className="rounded-lg border border-brand-line bg-white px-4 py-3 outline-none ring-brand-primary transition focus:ring-2"
            placeholder="What are you trying to launch in the next 60-90 days?"
            required
          />
          {fieldErrors.details ? <span className="text-xs text-rose-600">{fieldErrors.details}</span> : null}
        </label>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "Send inquiry"}
        </button>
        {message ? (
          <p className={state === "success" ? "text-sm text-emerald-600" : "text-sm text-rose-600"}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
