import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Re-Marketing Dashboard",
  description: "Vietnamese Re-Marketing Sales Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
