import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renato - Desenvolvedor Full Stack",
  description:
    "Portfólio de Renato Ramon - Desenvolvedor Full Stack especializado em Node.js, TypeScript, APIs escaláveis e otimização de performance.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "node.js",
    "typescript",
    "api",
    "postgresql",
    "next.js",
  ],
  authors: [{ name: "Renato Ramon" }],
  creator: "Renato Ramon",
  openGraph: {
    title: "LZ - Desenvolvedor Full Stack",
    description:
      "Portfólio de Renato Ramon - Desenvolvedor Full Stack especializado em Node.js, TypeScript, APIs escaláveis e otimização de performance.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
