import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

export async function convertToFlac(file: File): Promise<Blob> {
  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }

  // FFmpeg 가상 파일 시스템에 입력 파일 저장
  await ffmpeg.FS("writeFile", "input.webm", await fetchFile(file));

  // FFmpeg를 사용하여 WebM을 FLAC으로 변환
  await ffmpeg.run("-i", "input.webm", "-c:a", "flac", "output.flac");

  // 변환된 FLAC 파일을 Uint8Array로 가져오기
  const flacData = ffmpeg.FS("readFile", "output.flac");

  // Uint8Array를 Blob으로 변환
  return new Blob([flacData], { type: "audio/flac" });
}
