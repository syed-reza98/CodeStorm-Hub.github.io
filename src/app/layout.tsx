import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
