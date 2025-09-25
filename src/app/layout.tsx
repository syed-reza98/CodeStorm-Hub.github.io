import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CodeStorm Hub - Innovative Technology Solutions",
  description: "Leading technology company specializing in innovative software solutions, web development, and digital transformation services. We storm through challenges to deliver exceptional results.",
  keywords: "software development, web development, technology solutions, digital transformation, mobile apps, cloud computing",
  authors: [{ name: "CodeStorm Hub" }],
  creator: "CodeStorm Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestorm-hub.github.io",
    siteName: "CodeStorm Hub",
    title: "CodeStorm Hub - Innovative Technology Solutions",
    description: "Leading technology company specializing in innovative software solutions, web development, and digital transformation services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeStorm Hub - Innovative Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeStorm Hub - Innovative Technology Solutions",
    description: "Leading technology company specializing in innovative software solutions, web development, and digital transformation services.",
    images: ["/og-image.jpg"],
    creator: "@codestormhub",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
