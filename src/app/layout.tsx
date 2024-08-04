"use client";

import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Six_Caps } from "@next/font/google";
import { Poppins } from "@next/font/google";

import type { Metadata } from "next";

// Load the fonts
const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"], // Specify weights if needed
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Montoya - Creative Agency",
//   description: "Discover our creative world of design and innovation",
//   keywords: "creative agency, design, innovation, portfolio",
//   openGraph: {
//     title: "Montoya - Creative Agency",
//     description: "Discover our creative world of design and innovation",
//     url: "https://yourdomain.com",
//     siteName: "Montoya",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <style jsx global>{`
          :root {
            --font-six-caps: ${sixCaps.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
