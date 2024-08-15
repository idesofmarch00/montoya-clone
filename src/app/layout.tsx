import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Six_Caps, Poppins } from "next/font/google";
import type { Metadata } from "next";

const sixCaps = Six_Caps({
  subsets: ["latin"],
  weight: "400", // Six Caps only comes in 400 weight
  variable: "--font-six-caps",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

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
    <html lang="en" className={`${sixCaps.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
