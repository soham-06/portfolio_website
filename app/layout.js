import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Soham Thipse — Full Stack Developer",
  description:
    "Portfolio of Soham Thipse — Full Stack Developer specializing in AI-powered automation pipelines, LLMs, and scalable backend systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-mono), monospace" }}>
        {children}
      </body>
    </html>
  );
}
