"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApi } from "@/shared/hooks";

import { inferenceExample } from "@/shared";
import { AILoading } from "@/entities/inference";

export const ResultSession = ({
  inferenceExampleIds,
}: {
  inferenceExampleIds: number;
}) => {
  const { handleDummyUpload } = useApi();

  const router = useRouter();

  useEffect(() => {
    handleDummyUpload().then(() => router.push("/result"));
  }, []);

  return (
    <>
      <>
        <h1 className="mt-20 w-[750px]">
          {inferenceExample[inferenceExampleIds].child}
        </h1>
        <div className="mb-2 mt-1 h-[7px] w-[750px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
      </>
      <div className="-mb-24 -mt-20">
        <AILoading />
      </div>
    </>
  );
};
