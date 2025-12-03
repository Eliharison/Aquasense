import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aquasense - Dashboard de Aquapônia",
  description: "Venha conhecer o melhor dashboard de Aquapônia!",
  keywords: ["Aquapônia", "Peixe", "Psicultura", "Aquasense", "Planta"],
  authors: [{ name: "Technote" }],
  openGraph: {
    url: "https://aquasense.vercel.app/",
    type: "website",
    title: "Aquasense",
    description: "Venha conhecer o melhor dashboard de Aquapônia!",
  },
  icons: {
    icon: "/imgs/image-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
