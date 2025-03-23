import { useEffect, useRef, useState } from "react";

export function Recorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);
  const source = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (recording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        audioCtx.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        analyser.current = audioCtx.current.createAnalyser();
        source.current = audioCtx.current.createMediaStreamSource(stream);
        source.current.connect(analyser.current);
        analyser.current.fftSize = 1024; // 세밀한 주파수 분석
        visualize();

        mediaRecorder.current = new MediaRecorder(stream);
        audioChunks.current = [];
        mediaRecorder.current.ondataavailable = (event) =>
          audioChunks.current.push(event.data);
        mediaRecorder.current.start();
      });
    } else {
      stopVisualization();
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, {
            type: "audio/webm",
          });
          setAudioUrl(URL.createObjectURL(audioBlob));
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
    let prevDataArray = new Float32Array(bufferLength).fill(128); // 초기값 설정

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t; // 선형 보간 함수

    const draw = () => {
      if (!analyser.current) return;
      analyser.current.getByteTimeDomainData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white"; // 선 색상

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        prevDataArray[i] = lerp(prevDataArray[i], dataArray[i], 0.2); // 변화량 20%만 반영

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

  return (
    <>
      {/* 배경 투명 + 웨이브 그래프 */}
      <canvas
        ref={canvasRef}
        width={800}
        height={300}
        className="rounded"
        style={{ backgroundColor: "transparent" }}
      />
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
      {/* {audioUrl && (
        <div className="flex flex-col items-center gap-2">
          <audio controls src={audioUrl} />
          <a
            href={audioUrl}
            download="recording.webm"
            className="text-blue-400 underline"
          >
            다운로드
          </a>
        </div>
      )} */}
    </>
  );
}
