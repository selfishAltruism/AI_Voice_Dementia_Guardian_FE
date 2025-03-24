import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

export async function convertToFlac(file: File): Promise<Blob> {
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load(); // FFmpeg.js 로드
  }

  // 파일을 가상 파일 시스템에 입력
  ffmpeg.FS("writeFile", "input.webm", await fetchFile(file));

  // 변환 실행 (webm → flac)
  await ffmpeg.run("-i", "input.webm", "-c:a", "flac", "output.flac");

  // 변환된 파일을 읽어와 SharedArrayBuffer 그대로 사용
  const flacData = ffmpeg.FS("readFile", "output.flac");

  // SharedArrayBuffer를 Uint8Array로 변환 후 Blob 생성
  return new Blob([new Uint8Array(flacData.buffer)], { type: "audio/flac" });
}
