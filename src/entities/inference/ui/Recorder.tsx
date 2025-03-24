import { useEffect, useRef, useState } from "react";
import { convertToFlac } from "../utils";

export function Recorder({ children }: { children: React.ReactNode }) {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0); // 경과 시간 상태 추가
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);
  const source = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (recording) {
      startTime.current = Date.now();
      setElapsedTime(0); // 경과 시간 초기화

      intervalId.current = setInterval(() => {
        if (!startTime.current) return;
        const elapsedSeconds = Math.floor(
          (Date.now() - startTime.current) / 1000,
        );
        setElapsedTime(elapsedSeconds);

        if (elapsedSeconds >= 20) {
          //console.log("⏳ Recording reached 60 minutes. Stopping...");
          setRecording(false);
        }
      }, 1000);

      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        audioCtx.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        analyser.current = audioCtx.current.createAnalyser();
        source.current = audioCtx.current.createMediaStreamSource(stream);
        source.current.connect(analyser.current);
        analyser.current.fftSize = 1024;
        visualize();

        mediaRecorder.current = new MediaRecorder(stream);
        audioChunks.current = [];
        mediaRecorder.current.ondataavailable = (event) =>
          audioChunks.current.push(event.data);
        mediaRecorder.current.start();
      });
    } else {
      stopVisualization();
      if (intervalId.current) clearInterval(intervalId.current); // 인터벌 정리
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = async () => {
          // audioChunks.current가 ArrayBuffer로 저장되어 있다고 가정
          const audioBlob = new Blob(audioChunks.current, {
            type: "audio/webm", // 실제 녹음된 형식에 맞춰 설정
          });

          // Blob을 File로 변환
          const audioFile = new File([audioBlob], "audio.webm", {
            type: "audio/webm",
          });

          try {
            // FLAC 형식으로 변환
            const flacBlob = await convertToFlac(audioFile);

            // FLAC 변환 후, URL 생성
            setAudioUrl(URL.createObjectURL(flacBlob));
          } catch (error) {
            console.error("FLAC 변환 실패:", error);
          }
        };
      }
    }
  }, [recording]);

  const visualize = () => {
    if (!canvasRef.current || !analyser.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const bufferLength = analyser.current.fftSize;
    const dataArray = new Uint8Array(bufferLength);
    let prevDataArray = new Float32Array(bufferLength).fill(128);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      if (!analyser.current) return;
      analyser.current.getByteTimeDomainData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white";

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        prevDataArray[i] = lerp(prevDataArray[i], dataArray[i], 0.2);

        const v = prevDataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.stroke();
      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const stopVisualization = () => {
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
    if (audioCtx.current) audioCtx.current.close();
  };

  const formatTime = (seconds: number) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 웨이브 그래프 */}
      {recording ? (
        <canvas
          ref={canvasRef}
          width={767}
          height={150}
          className="rounded"
          style={{ backgroundColor: "transparent", marginBottom: "30px" }}
        />
      ) : (
        <div className="mb-[105px] mt-[73px] h-[2px] w-[767px] rounded-md bg-white" />
      )}
      <div className="flex items-center gap-12">
        <p className="flex h-[90px] w-[252px] items-center justify-center rounded-md border border-white bg-white bg-gradient-to-r text-[54px] font-bold text-sub">
          {formatTime(elapsedTime)}
        </p>
        <button
          onClick={() => setRecording(!recording)}
          className={`flex h-[100px] w-[100px] items-center justify-center rounded-lg text-white transition`}
        >
          {!recording ? (
            <span className="icon-[fluent--record-24-regular] text-[100px]" />
          ) : (
            <span className="icon-[fluent--record-stop-32-regular] mr-[1px] text-[95px]" />
          )}
        </button>
        {children}
      </div>
    </div>
  );
}
