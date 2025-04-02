import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Arcadia - Retro Gaming Themed Hackathon",
  description: "Join the biggest retro-themed hackathon event. Compete in Web3, AI/ML, and GameDev tracks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pressStart2P.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
