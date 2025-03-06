import type { Metadata } from "next";
import "./globals.css";
import { Nanum_Gothic } from "next/font/google";

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
          <footer className="bg-[#000000] text-white text-center p-4 text-sm">
            <p>&copy; 2025 My Website. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
