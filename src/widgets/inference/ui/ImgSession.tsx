"use client";

import { useRef, useState } from "react";
import { Recorder, AudioPlayer } from "@/entities/inference";
import { inferenceExample } from "@/shared";
import { Button } from "@/entities/layout";

export const ImgSession = ({
  inferenceExampleIds,
}: {
  inferenceExampleIds: number;
}) => {
  const [isStart, setIsStart] = useState(false);

  return (
    <>
      {isStart ? (
        <img
          src={inferenceExample[inferenceExampleIds].ref}
          className="mt-24 h-60 w-60 rounded-xl"
        />
      ) : (
        <>
          <h1 className="mt-20 w-[750px]">
            {inferenceExample[inferenceExampleIds].child}
          </h1>
          <div className="mb-2 mt-1 h-[7px] w-[750px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
        </>
      )}
      <div className="mt-12 flex items-center gap-12">
        {isStart ? (
          <Recorder />
        ) : (
          <Button onClick={() => setIsStart(true)}>시작</Button>
        )}
      </div>
    </>
  );
};
