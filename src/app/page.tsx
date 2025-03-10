"use client";

import { LinkButton } from "@/entities/layout";
import { AILoading } from "@/entities/inference";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-2">
        <h1>AI</h1>
        <div className="max-w-[60px]">
          <AILoading small />
        </div>
        <h1>치매 지킴이</h1>
      </div>
      <p className="text-gray">~서비스에 대한 설명~</p>
      <LinkButton title="AI 음성 치매 검사 시작" to="/personal-info" />
    </>
  );
}
