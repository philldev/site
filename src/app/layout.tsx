import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deddy Wolley",
  description: "Deddy Wolley's personal website and blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={GeistSans.className + " min-h-svh"}>
        <div className="max-w-screen-sm mx-auto">
          <header>
            <nav className="px-4 py-6 mx-auto w-max">
              <ul className="flex">
                <li>
                  <Button asChild size="sm" variant="ghost">
                    <Link href="/">Home</Link>
                  </Button>
                </li>
                <li>
                  <Button size="sm" variant="ghost">
                    Works
                  </Button>
                </li>
                <li>
                  <Button size="sm" variant="ghost">
                    Blog
                  </Button>
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
