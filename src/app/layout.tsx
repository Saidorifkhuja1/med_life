import type { Metadata } from "next";
import { Merriweather, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app-context";
import { AppHeader } from "@/components/app-header";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Merriweather({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Dorichi",
  description: "Dorixona va dori qidiruvi uchun platforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <AppProvider>
          <div className="app-shell">
            <AppHeader />
            <main className="content-shell">{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
