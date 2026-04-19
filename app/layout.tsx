import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Drowning In Silence | A2 Media Studies Film Blog",
    template: "%s | Drowning In Silence",
  },
  description:
    "A production diary documenting the journey of creating 'Drowning in Silence' — an A2 Media Studies short film by Habibullah Wahaaj & Ziyad Baig.",
  keywords: ["short film", "media studies", "a level", "production diary", "drowning in silence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-black text-text-primary antialiased selection:bg-gold/20 selection:text-gold">
        {children}
      </body>
    </html>
  );
}
