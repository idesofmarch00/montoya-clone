import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montoya - Creative Agency",
  description: "Discover our creative world of design and innovation",
  keywords: "creative agency, design, innovation, portfolio",
  openGraph: {
    title: "Montoya - Creative Agency",
    description: "Discover our creative world of design and innovation",
    url: "https://yourdomain.com",
    siteName: "Montoya",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
