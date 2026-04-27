import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "MicroFinTech Inc | Digital Transformation and Responsible AI for Microfinance Institutions",
  description:
    "MicroFinTech Inc helps microfinance institutions modernize technology, strengthen IT operations, and adopt artificial intelligence responsibly to expand financial inclusion and borrower success.",
  keywords: [
    "Microfinance digital transformation",
    "AI adoption for microfinance",
    "IT advisory for MFIs",
    "Core banking modernization",
    "Financial inclusion technology",
    "Microfinance operations",
    "Responsible AI",
    "MFI technology strategy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
