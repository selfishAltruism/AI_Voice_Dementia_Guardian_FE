import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { BounceLoader } from "react-spinners";

import { Button } from "@/entities/layout";

export function AudioPlayer({
  audioSrc,
  setPlaying,
  playing,
  isReplay,
}: {
  audioSrc: string;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  playing: boolean;
  isReplay: RefObject<boolean>;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => setPlaying(true);
    const handleEnded = () => {
      setPlaying(false);
      isReplay.current = true;
    };

    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex w-64 justify-center">
      {playing ? (
        <BounceLoader color="white" className="mb-3 mt-4" />
      ) : (
        <Button onClick={togglePlay}>
          {isReplay.current ? "다시 듣기" : "시작"}
        </Button>
      )}
      <audio ref={audioRef} src={audioSrc} className="hidden" />
    </div>
  );
}
