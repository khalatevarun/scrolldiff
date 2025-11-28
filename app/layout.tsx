import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "prismjs/themes/prism-tomorrow.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scroll the Diff",
  description: "Turn code diffs into step-by-step tutorials.",
  icons: {
    icon: [
      { url: "/16.png", sizes: "16x16", type: "image/png" },
      { url: "/32.png", sizes: "32x32", type: "image/png" },
      { url: "/96.png", sizes: "96x96", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
