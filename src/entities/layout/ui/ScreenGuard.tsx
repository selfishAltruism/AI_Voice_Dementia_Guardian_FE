"use client";

import { useEffect, useState } from "react";

export function ScreenGuard() {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsAllowed(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAllowed) {
    return (
      <div className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-sub to-main text-center text-2xl font-bold text-white">
        <span className="icon-[lucide--rotate-ccw] mb-2 text-5xl" />
        화면을 가로 모드로 돌려주세요!
      </div>
    );
  }
}
