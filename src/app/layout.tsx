import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TITAN | Elite Performance Gym",
  description: "Built for dominance. Join the elite performance club and transform your potential into power.",
  keywords: ["gym", "fitness", "elite training", "performance", "bodybuilding", "titan gym"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {children}
      </body>
    </html>
  );
}

