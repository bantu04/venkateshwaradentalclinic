import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pearl px-4 text-slate-900">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-8xl font-serif font-bold text-teal-brand">404</h1>
        <h2 className="text-2xl font-bold font-serif">Page Not Found</h2>
        <p className="text-sm text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-teal-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-slate-900 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-pearl px-4 text-slate-900">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold font-serif">Something went wrong</h1>
        <p className="text-sm text-slate-600">
          We encountered an error loading this page. Please try refreshing.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-teal-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Venkateswara Multi Speciality Dental Clinic — Dr. Gopi Krishna | Balanagar, Hyderabad",
      },
      {
        name: "description",
        content:
          "Venkateswara Multi Speciality Dental Clinic in Balanagar, Hyderabad. Dr. Gopi Krishna (BDS, MDS - Prosthodontist, 26+ Yrs Exp, 97% Rating, 653+ Stories). Painless Root Canals, Implants & Dentures.",
      },
      { name: "author", content: "Venkateswara Multi Speciality Dental Clinic" },
      { property: "og:title", content: "Venkateswara Multi Speciality Dental Clinic" },
      {
        property: "og:description",
        content:
          "Top-rated dental clinic in Balanagar, Hyderabad. Dr. Gopi Krishna (26+ Yrs Exp). 97% Satisfaction (653 Votes).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="flex min-h-screen flex-col bg-pearl text-slate-800 font-sans selection:bg-teal-brand selection:text-white">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
