import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header, PageTransition, StairTransition } from "@/components/layout";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Ahmad Azzam | Frontend Developer | Software Engineer",
  description:
    "I'm a dedicated Frontend Developer and Software Engineer specializing in crafting dynamic, user-friendly web applications with the latest technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
