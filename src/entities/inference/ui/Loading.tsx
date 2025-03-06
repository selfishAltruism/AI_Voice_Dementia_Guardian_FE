import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Loading = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 씬, 카메라, 렌더러 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 배경을 흰색으로 설정
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // 카메라 비율 설정
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // 화면 크기를 비율에 맞게 설정하되, 고정 최대 크기 지정
    const maxWidth = 500; // 최대 너비
    const maxHeight = 500; // 최대 높이

    const canvasWidth = Math.min(window.innerWidth, maxWidth); // 화면 너비와 최대 너비 중 작은 값
    const canvasHeight = Math.min(window.innerHeight, maxHeight); // 화면 높이와 최대 높이 중 작은 값

    renderer.setSize(canvasWidth, canvasHeight);
    camera.aspect = canvasWidth / canvasHeight; // 카메라 비율에 맞게 설정
    camera.updateProjectionMatrix(); // 비율을 업데이트

    // 정12면체의 선만 그리기 위해 LineSegments 사용
    const geometry = new THREE.DodecahedronGeometry(5); // 반지름이 5인 정12면체
    const material = new THREE.LineBasicMaterial({ color: 0x000000 }); // 검은 선으로 설정
    const edges = new THREE.EdgesGeometry(geometry); // 정12면체의 모서리만 추출
    const line = new THREE.LineSegments(edges, material);
    scene.add(line);

    // 카메라 위치 설정
    camera.position.z = 15;

    // 애니메이션: 3D 다각형을 회전시킴
    const animate = function () {
      requestAnimationFrame(animate);

      // 3D 정12면체를 X, Y축을 기준으로 회전
      line.rotation.x += 0.02;
      line.rotation.y += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 리소스 정리
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
