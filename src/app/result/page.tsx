"use client";

import { LinkButton } from "@/entities/layout";
import { AILoading } from "@/entities/inference";

export default function Result() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <h1>AI</h1>
          <div className="mb-2 max-w-[60px]">
            <AILoading small />
          </div>
          <h1>치매 지킴이</h1>
        </div>
        <strong className="mb-4 text-[80px]">분석 결과 </strong>
      </div>

      <div className="h-[360px] w-[2px] rounded-md bg-white" />
      <div className="text-start leading-relaxed"></div>
      <LinkButton to="/">
        <span className="icon-[lsicon--out-of-warehouse-filled] -mb-3 h-[40px] w-[40px]" />
      </LinkButton>
    </div>
  );
}
