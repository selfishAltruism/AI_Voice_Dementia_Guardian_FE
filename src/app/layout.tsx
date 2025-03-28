import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

import { Footer, ScreenGuard } from "@/entities/layout";
import { Toaster } from "react-hot-toast";

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
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={nanumGothic.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <ScreenGuard />
        <div className="flex min-h-screen flex-col">
          <main className="flex flex-grow flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
