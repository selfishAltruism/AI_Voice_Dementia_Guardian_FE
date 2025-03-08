import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

import { Footer } from "@/entities/layout";

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI 음성 치매 지킴이",
  description: "음성 분류 모델 기반 치매 판단 웹 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanumGothic.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow flex flex-col justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
