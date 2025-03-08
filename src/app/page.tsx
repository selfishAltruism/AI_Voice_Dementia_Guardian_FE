"use client";

import { AILoading } from "@/entities/inference";
import { LinkButton } from "@/entities/layout";

export default function Home() {
  return (
    <>
      <AILoading />
      <p>이 폰트는 세련된 디자인을 제공합니다.</p>
      <LinkButton title="TITEL" to="/form" disabled></LinkButton>
    </>
  );
}
