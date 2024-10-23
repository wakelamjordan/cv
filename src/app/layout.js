import localFont from "next/font/local";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Curriculum Vitae de Jordan Wakelam - Développeur Web",
  description:
    "Découvrez le curriculum vitae de Jordan Wakelam, développeur web spécialisé en backend avec des compétences en Symfony, React et plus encore. Passionné, déterminé, et toujours en quête de nouvelles connaissances, il met son expertise et son adaptabilité au service de chaque projet.",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  applicationName: "Jordan Wakelam Cv",
  msapplicationTileColor: "#da532c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="winter">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
