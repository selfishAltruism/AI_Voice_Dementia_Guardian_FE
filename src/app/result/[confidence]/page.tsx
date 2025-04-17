"use client";

import { useRouter } from "next/navigation";

import { usePersonalInfoStore } from "@/shared/store";
import { LinkButton, Button } from "@/entities/layout";

// import { AILoading } from "@/entities/inference";

const ResultTitle = {
  NOMAL: (
    <span>
      인지 기능은 <span className="text-[#00d400]">정상</span>입니다.
    </span>
  ),
  WARNING: (
    <span>
      <span className="text-[#FF6C2D]">추가 검사</span>를 권해드려요.
    </span>
  ),
  DANGER: (
    <span>
      <span className="text-[#FF0000]">추가 검사</span>를 권해드려요.
    </span>
  ),
};

const ResultExplanation = {
  NOMAL: (
    <span>
      앞으로도 일상 속 대화를 자주 나누고, <br /> 정기적인 점검을 권장드려요!
    </span>
  ),
  WARNING: (
    <span>
      너무 걱정하실 필요는 없지만, 가까운 시일 내에 <br /> 전문자의 정밀한
      진단을 권해드립니다.
    </span>
  ),
  DANGER: (
    <span>
      빠른 시일 내에 <br /> 전문자의 정밀한 진단을 권해드립니다.
    </span>
  ),
};

interface ResultPageProps {
  params: { confidence: string };
}

export default function Result({ params: { confidence } }: ResultPageProps) {
  const name = usePersonalInfoStore((state) => state.name);
  const router = useRouter();

  const key =
    parseFloat(confidence) < 0.5
      ? "NOMAL"
      : parseFloat(confidence) < 0.75
        ? "WARNING"
        : "DANGER";

  return (
    <>
      <strong className="fixed left-3 top-3 text-2xl">
        🚨 본 서비스는 의료기기가 아님을 알려드립니다.
      </strong>
      <div className="flex flex-col gap-2">
        <strong className="text-5xl leading-tight">
          {name}님의
          <br />
          {ResultTitle[key]}
        </strong>
        <div className="mb-12 h-[7px] w-[750px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
        <strong className="text-4xl leading-tight">
          {ResultExplanation[key]}
        </strong>
      </div>
      <div className="absolute bottom-5 w-80">
        <Button
          className="h-[65px]"
          onClick={() => router.push("/inference/1")}
        >
          다시 검사하기
        </Button>
      </div>
      <LinkButton to="/">
        <span className="icon-[lsicon--out-of-warehouse-filled] -mb-3 h-[40px] w-[40px]" />
      </LinkButton>
    </>
  );
}
