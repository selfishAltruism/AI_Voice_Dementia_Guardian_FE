"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { usePersonalInfoStore } from "@/shared/store";
import { inferenceExample } from "@/shared";
import {
  AudioSession,
  ImgSession,
  TextSession,
  MathSession,
  ResultSession,
} from "@/widgets/inference";

const Inference = ({
  params: { step },
}: {
  params: {
    step: string;
  };
}) => {
  const router = useRouter();
  const isPersonalInfoComplete = usePersonalInfoStore(
    (state) => state.isPersonalInfoComplete,
  );

  useEffect(() => {
    if (isPersonalInfoComplete()) return;
    toast.error("기본 인적 사항을 입력해주세요.");
    router.replace("/personal-info");
  }, []);

  return (
    <>
      {inferenceExample[+step].type === "AUDIO" && (
        <AudioSession inferenceExampleIds={+step} />
      )}
      {inferenceExample[+step].type === "IMG" && (
        <ImgSession inferenceExampleIds={+step} />
      )}
      {inferenceExample[+step].type === "TEXT" && (
        <TextSession inferenceExampleIds={+step} />
      )}
      {inferenceExample[+step].type === "MATH" && (
        <MathSession inferenceExampleIds={+step} />
      )}
      {inferenceExample[+step].type === "RESULT" && (
        <ResultSession inferenceExampleIds={+step} />
      )}
    </>
  );
};

export default Inference;
