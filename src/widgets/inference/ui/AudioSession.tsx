"use client";

import { useRef, useState } from "react";
import { Recorder, AudioPlayer } from "@/entities/inference";
import { inferenceExample } from "@/shared";

export const AudioSession = ({
  inferenceExampleIds,
}: {
  inferenceExampleIds: number;
}) => {
  const [playing, setPlaying] = useState(false);
  const isReplay = useRef(false);

  return (
    <>
      <h1 className="mt-20 w-[750px]">
        {inferenceExample[inferenceExampleIds].child}
      </h1>
      <div className="mb-2 mt-1 h-[7px] w-[750px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
      <div className="mt-12 flex items-center gap-12">
        {isReplay.current ? (
          <Recorder>
            <AudioPlayer
              audioSrc={inferenceExample[inferenceExampleIds].ref}
              setPlaying={setPlaying}
              playing={playing}
              isReplay={isReplay}
            />
          </Recorder>
        ) : (
          <div className="mr-24 w-[750px]">
            <AudioPlayer
              audioSrc={inferenceExample[inferenceExampleIds].ref}
              setPlaying={setPlaying}
              playing={playing}
              isReplay={isReplay}
            />
          </div>
        )}
      </div>
    </>
  );
};
