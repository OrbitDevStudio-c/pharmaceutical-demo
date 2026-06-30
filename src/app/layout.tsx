import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaCure Pharma | Innovating Healthcare for a Better Tomorrow",
  description:
    "NovaCure Pharma is a leading global pharmaceutical company dedicated to delivering high-quality healthcare products, advanced clinical research, and patient-focused solutions.",
  keywords: [
    "NovaCure Pharma",
    "Pharmaceuticals",
    "Healthcare",
    "Medicine Manufacturing",
    "Advanced Research",
    "WHO GMP Certified",
    "FDA Compliance",
    "Medical Devices",
  ],
  authors: [{ name: "NovaCure Pharma" }],
  openGraph: {
    title: "NovaCure Pharma | Innovating Healthcare",
    description:
      "Delivering high-quality pharmaceutical products with advanced research, global standards, and patient-focused care.",
    type: "website",
    locale: "en_US",
    siteName: "NovaCure Pharma",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
