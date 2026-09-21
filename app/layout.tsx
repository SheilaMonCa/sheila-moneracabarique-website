import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { education } from "@/data/education";
import { skills, languages } from "@/data/skills";

import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheila Monera Cabarique",
  description:
    "Sheila Monera Cabarique, Computer Science, Data Science & Analytics, and Finance student at Case Western Reserve University. Portfolio, experience, and research work.",
  metadataBase: new URL("https://sheila-moneracabarique-website.vercel.app"),
  openGraph: {
    title: "Sheila Monera Cabarique",
    description:
      "Computer Science, Data Science & Analytics, and Finance student at Case Western Reserve University.",
    url: "https://sheila-moneracabarique-website.vercel.app",
    siteName: "Sheila Monera Cabarique",
    type: "website",
  },
  verification:{
      google:"q8I3Ls8c1cE7qlzN4B90s60Tb9VRMW1gCkBAvXzskZA",

    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 justify-center">
              <div className="flex max-w-7xl flex-1 flex-col md:flex-row">
                <Sidebar
                  photo="/headshot.jpg"
                  photoAlt="Sheila's profile photo"
                  education={education}
                  skills={skills}
                  languages={languages}
                />
                <div className="flex flex-1 flex-col">
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}