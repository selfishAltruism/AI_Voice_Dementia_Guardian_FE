"use client";

import { LinkButton } from "@/entities/layout";
import { AILoading } from "@/entities/inference";

export default function Home() {
  return (
    <div className="flex gap-8">
      <div className="flex items-center gap-2">
        <h1>AI</h1>
        <div className="mb-2 max-w-[60px]">
          <AILoading small />
        </div>
        <h1>치매 지킴이</h1>
      </div>
      <div className="h-[345px] w-[2px] rounded-md bg-white" />
      <div className="text-start leading-relaxed">
        <strong>AI 치매 지킴이</strong>는 음성 분석 AI 기술을 활용하여
        <br />
        간단한 대화를 통해 인지 기능을 점검할 수 있는 서비스 입니다. <br />
        <div className="h-4" />
        <strong className="text-xl">✅ 간편한 이용</strong>
        <br />
        버튼 클릭 한 번으로 시작 <br />
        <div className="h-3" />
        <strong className="text-xl">✅ 빠른 진행</strong>
        <br />
        n분 이내의 신속한 점검 <br />
        <div className="h-3" />
        <strong className="text-xl">✅ 정확한 결과</strong>
        <br />
        AI를 활용한 치매 위험군을 조기에 선별
        <br />
        <div className="h-4" />
        <p className="text-xl font-bold">
          👉 하단 시작 버튼을 통해 인지 건강을 손쉽게 확인하세요!
        </p>
      </div>
      <LinkButton title="AI 음성 치매 검사 시작" to="/agreement" />
    </div>
  );
}
