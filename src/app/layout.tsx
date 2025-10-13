import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lazasa Portfolio",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossOrigin="" />
        <link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossOrigin="" />
      </head>
      <body className="max-w-[120ch] min-h-[90vh] mx-auto px-[1rem] font-atkinson">
        {children}
      </body>
    </html>
  );
}
