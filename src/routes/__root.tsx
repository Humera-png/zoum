import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZOUM Consultancy",
  alternateName: "ZOUM Placement Services",
  description:
    "Premium business consultancy in Jaipur offering business strategy, career advisory, social media marketing, and AI automation services across India.",
  url: "https://zoumconsultancy.com",
  logo: "https://zoumconsultancy.com/assets/zoum-logo.png",
  email: "contact@zoumconsultancy.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consultancy Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Outsourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Career Advisory & Executive Placement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & Software Development" } },
    ],
  },
  sameAs: ["https://zoumconsultancy.com"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZOUM Consultancy Jaipur | Business Strategy, Career & AI Services" },
      {
        name: "description",
        content:
          "ZOUM Consultancy: Jaipur's premier business consultancy. Expert services in business strategy, executive career advisory, social media marketing, and AI automation across India.",
      },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "business consultancy Jaipur, career advisory India, social media marketing, AI automation, placement services, ZOUM" },
      { property: "og:title", content: "ZOUM Consultancy | Business Strategy & Career Advisory | Jaipur, India" },
      {
        property: "og:description",
        content: "Scale your business and accelerate your career with ZOUM Consultancy, Jaipur's leading consultancy for strategy, talent, social media, and AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://zoumconsultancy.com" },
      { property: "og:image", content: "https://zoumconsultancy.com/assets/zoum-logo.png" },
      { property: "og:site_name", content: "ZOUM Consultancy" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZOUM Consultancy | Business Strategy & Career Advisory" },
      { name: "twitter:description", content: "Scale your business and accelerate your career with Jaipur's leading consultancy." },
      { name: "twitter:image", content: "https://zoumconsultancy.com/assets/zoum-logo.png" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/assets/zoum-logo.png",
      },
      { rel: "canonical", href: "https://zoumconsultancy.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
      <Scripts />
    </>
  );
}

import { PageTransition } from "@/components/PageTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </QueryClientProvider>
  );
}
