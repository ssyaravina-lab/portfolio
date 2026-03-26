import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santika Syaravina | Founder Development Lead",
  description:
    "Portfolio of Santika Syaravina — Human-Centered Systems Designer, entrepreneurship academic, researcher, and design thinking trainer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
