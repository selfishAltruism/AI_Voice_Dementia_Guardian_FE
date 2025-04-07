"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Recorder, AudioPlayer } from "@/entities/inference";
import {
  usePersonalInfoStore,
  useInferenceInputDataStore,
} from "@/shared/store";

const Inference = ({
  params: { step },
}: {
  params: {
    step: string;
  };
}) => {
  const [playing, setPlaying] = useState(false);
  const isReplay = useRef(false);
  const isPersonalInfoComplete = usePersonalInfoStore(
    (state) => state.isPersonalInfoComplete,
  );

  const router = useRouter();

  useEffect(() => {
    if (isPersonalInfoComplete()) return;
    toast.error("기본 인적 사항을 입력해주세요.");
    router.replace("/personal-info");
  }, []);

  return (
    <>
      <h1 className="mt-20">들리는 문장을 듣고 따라 말해주세요.</h1>
      <div className="mb-2 mt-1 h-[7px] w-[770px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
      <div className="mt-12 flex items-center gap-12">
        {isReplay.current ? (
          <Recorder isReplay={isReplay}>
            <AudioPlayer
              audioSrc="/sample.mp3"
              setPlaying={setPlaying}
              playing={playing}
              isReplay={isReplay}
            />
          </Recorder>
        ) : (
          <AudioPlayer
            audioSrc="/sample.mp3"
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
