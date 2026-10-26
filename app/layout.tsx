import type { Metadata } from "next";
import localFont from "next/font/local";
import { AgentationFeedback } from "@/components/agentation-feedback";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";
import { site } from "@/data/site";
import "./globals.css";

const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Gilroy-Extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Shirish Shrestha",
    "software engineer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Kathmandu",
    "Nepal",
  ],
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google781497cf4ebbeb66",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  email: profile.email,
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
    addressCountry: "NP",
  },
  sameAs: Object.values(profile.social),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={gilroy.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <AgentationFeedback />
        </ThemeProvider>
      </body>
    </html>
  );
}
