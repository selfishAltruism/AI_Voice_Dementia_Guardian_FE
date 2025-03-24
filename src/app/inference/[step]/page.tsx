"use client";

import { Recorder, AudioPlayer } from "@/entities/inference";
import { useRef, useState } from "react";

const Inference = ({
  params: { step },
}: {
  params: {
    step: string;
  };
}) => {
  const [playing, setPlaying] = useState(false);
  const isReplay = useRef(false);

  return (
    <>
      <h1 className="mt-20">들리는 문장을 듣고 따라 말해주세요.</h1>
      <div className="mb-2 mt-1 h-[7px] w-[770px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
      <div className="mt-12 flex items-center gap-12">
        {isReplay.current ? (
          <Recorder>
            <AudioPlayer
              audioSrc="/recording.webm"
              setPlaying={setPlaying}
              playing={playing}
              isReplay={isReplay}
            />
          </Recorder>
        ) : (
          <AudioPlayer
            audioSrc="/recording.webm"
            setPlaying={setPlaying}
            playing={playing}
            isReplay={isReplay}
          />
        )}
      </div>
    </>
  );
};

export default Inference;
