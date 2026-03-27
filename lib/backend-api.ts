export type ApiEnvelope<T> = {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[] | undefined>;
};

export type ApiErrorEnvelope = {
  success: false;
  message: string;
  errors?: Record<string, string[] | undefined>;
};

export class BackendApiError extends Error {
  public readonly statusCode: number;
  public readonly fieldErrors?: Record<string, string[] | undefined>;

  constructor(message: string, statusCode: number, fieldErrors?: Record<string, string[] | undefined>) {
    super(message);
    this.name = "BackendApiError";
    this.statusCode = statusCode;
    this.fieldErrors = fieldErrors;
  }
}

export type AboutValue = {
  title: string;
  description: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
};

export type LiveMetrics = {
  inquiryCount: number;
  latestInquiryAt: string | null;
};

export type InquiryPayload = {
  name: string;
  email: string;
  details: string;
};

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
}

function isJsonResponse(contentType: string | null) {
  return Boolean(contentType && contentType.includes("application/json"));
}

function unknownErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "Unexpected error occurred";
}

export function isBackendApiError(error: unknown): error is BackendApiError {
  return error instanceof BackendApiError;
}

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${getApiBaseUrl()}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      if (isJsonResponse(contentType)) {
        const payload = (await response.json()) as Partial<ApiErrorEnvelope>;
        throw new BackendApiError(
          payload.message || `Request failed with status ${response.status}`,
          response.status,
          payload.errors
        );
      }

      const text = await response.text();
      throw new BackendApiError(text || `Request failed with status ${response.status}`, response.status);
    }

    if (!isJsonResponse(contentType)) {
      throw new BackendApiError("Invalid server response format", response.status);
    }

    const json = (await response.json()) as ApiEnvelope<T>;
    return json.data;
  } catch (error) {
    if (error instanceof BackendApiError) {
      throw error;
    }

    throw new BackendApiError(unknownErrorMessage(error), 0);
  }
}

export function getAboutValues() {
  return fetchApi<AboutValue[]>("/api/v1/content/about-values");
}

export function getBlogPosts() {
  return fetchApi<BlogPost[]>("/api/v1/content/blog-posts");
}

export function getLiveMetrics() {
  return fetchApi<LiveMetrics>("/api/v1/content/metrics");
}

export function submitInquiry(payload: InquiryPayload) {
  return fetchApi<{ id: string }>("/api/v1/inquiries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}