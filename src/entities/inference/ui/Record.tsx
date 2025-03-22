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
    analyser.current.fftSize = 256;
    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!analyser.current) return;
      analyser.current.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dataArray.forEach((value, index) => {
        const x = (index / bufferLength) * canvas.width;
        const y = (value / 255) * canvas.height;
        ctx.fillStyle = "rgb(50, 150, 250)";
        ctx.fillRect(x, canvas.height - y, canvas.width / bufferLength, y);
      });

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
    <div className="bg-gray-100 flex w-96 flex-col items-center gap-4 rounded-lg p-6 shadow-lg">
      <canvas
        ref={canvasRef}
        width={300}
        height={100}
        className="rounded bg-white"
      />
      <button
        onClick={() => setRecording(!recording)}
        className={`rounded-lg px-4 py-2 text-white transition ${
          recording ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {recording ? "녹음 중지" : "녹음 시작"}
      </button>
      {audioUrl && (
        <div className="flex flex-col items-center gap-2">
          <audio controls src={audioUrl} />
          <a
            href={audioUrl}
            download="recording.webm"
            className="text-blue-600 underline"
          >
            다운로드
          </a>
        </div>
      )}
    </div>
  );
}
