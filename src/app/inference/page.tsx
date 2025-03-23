"use client";

import { Recorder, AudioPlayer } from "@/entities/inference";
import { Button } from "@/entities/layout";
import { useRef, useState } from "react";

const Inference = () => {
  const [playing, setPlaying] = useState(false);
  const isReplay = useRef(false);

  return (
    <>
      <h1 className="mt-32">들리는 문장을 듣고</h1>
      <h1>따라 말해주세요.</h1>
      <div className="mb-2 mt-1 h-[7px] w-[400px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_10%]" />
      {isReplay.current && <Recorder />}
      <AudioPlayer
        audioSrc="/recording.webm"
        setPlaying={setPlaying}
        playing={playing}
        isReplay={isReplay}
      />
    </>
  );
};

export default Inference;
