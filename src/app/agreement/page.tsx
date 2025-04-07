"use client";

import { LinkButton } from "@/entities/layout";
import { useState } from "react";
import { Checkbox } from "@/entities/layout";
import { usePersonalInfoStore } from "@/shared/store";

const Agreement = () => {
  const agreePersonalInfo = usePersonalInfoStore(
    (state) => state.agreePersonalInfo,
  );

  const setAgreePersonalInfo = usePersonalInfoStore(
    (state) => state.setAgreePersonalInfo,
  );

  const agreeThirdPartyConsent = usePersonalInfoStore(
    (state) => state.agreeThirdPartyConsent,
  );

  const setAgreeThirdPartyConsent = usePersonalInfoStore(
    (state) => state.setAgreeThirdPartyConsent,
  );

  return (
    <>
      <h1 className="w-[700px]">
        서비스 사용을 위해 <br />
        아래 사항을 동의해주세요.
      </h1>
      <div className="mb-2 mt-1 h-[7px] w-[700px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]" />
      <main className="div mt-2 flex w-[700px] flex-col items-start gap-1 text-black">
        <h3 className="text-white">
          개인정보 수집 및 이용 <span>필수</span>
        </h3>
        <div className="h-36 w-full overflow-y-auto rounded-xl border-4 border-white bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">
            1. 개인정보 제공 목적 및 제공 기관
          </h2>
          <p className="text-gray-700 mb-2 text-sm">
            수집된 개인정보는 실증 연구 결과 분석 및 연구 목적으로 아래 기관에
            제공될 수 있습니다.
          </p>
          <ul className="text-gray-700 mb-4 list-inside list-disc text-sm">
            <li>
              <strong>제공 기관:</strong> 보건소, 치매안심센터, 자사의 연구
              협력기관
            </li>
            <li>
              <strong>제공 목적:</strong> 치매 조기 진단 및 예방 연구, AI 모델
              개선, 서비스 개발
            </li>
          </ul>

          <h2 className="mb-2 text-lg font-semibold">
            2. 제공되는 개인정보 항목
          </h2>
          <ul className="text-gray-700 mb-4 list-inside list-disc text-sm">
            <li>
              <strong>기본정보:</strong> 성명, 생년월일, 성별, 학력
            </li>
            <li>
              <strong>건강정보:</strong> 기존 인지 기능 점검 결과, 음성 데이터,
              인지 관련 설문 응답
            </li>
          </ul>

          <h2 className="mb-2 text-lg font-semibold">3. 보유 및 이용 기간</h2>
          <p className="text-gray-700 text-sm">
            제공된 개인정보는 연구 목적 달성 후 즉시 파기됩니다.
          </p>
        </div>

        <div className="relative h-12 w-full text-white">
          <Checkbox
            onClick={() => setAgreePersonalInfo(!agreePersonalInfo)}
            label="동의합니다."
            checked={agreePersonalInfo}
          />
        </div>

        <h3 className="text-white">
          개인정보 제3자 제공 동의 <span>선택</span>
        </h3>
        <div className="h-36 w-full overflow-y-auto rounded-xl border-4 border-white bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">1. 개인정보 처리 목적</h2>
          <ul className="text-gray-700 mb-4 list-inside list-disc text-sm">
            <li>인지 기능 점검 서비스 제공</li>
            <li>연구 및 분석을 위한 데이터 활용</li>
            <li>치매 조기 발견을 위한 고위험군 예측 모델 개발</li>
            <li>서비스 개선 및 연구</li>
          </ul>

          <h2 className="mb-2 text-lg font-semibold">2. 개인정보 항목</h2>
          <ul className="text-gray-700 mb-4 list-inside list-disc text-sm">
            <li>
              <strong>기본정보:</strong> 성명, 생년월일, 성별, 학력
            </li>
            <li>
              <strong>건강정보:</strong> 기존 인지 기능 점검 결과, 음성 데이터,
              인지 관련 설문 응답
            </li>
          </ul>

          <h2 className="mb-2 text-lg font-semibold">3. 보유 및 이용 기간</h2>
          <p className="text-gray-700 mb-4 text-sm">
            수집된 개인정보는 실증 연구 종료 후 2년간 보관 후 안전하게
            파기됩니다.
          </p>

          <h2 className="mb-2 text-lg font-semibold">4. 동의 거부 권리 안내</h2>
          <p className="text-gray-700 text-sm">
            개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 동의하지 않을
            경우 본 서비스에 참여할 수 없습니다.
          </p>
        </div>
        <div className="relative h-12 w-full text-white">
          <Checkbox
            onClick={() => setAgreeThirdPartyConsent(!agreeThirdPartyConsent)}
            label="동의합니다."
            checked={agreeThirdPartyConsent}
          />
        </div>
      </main>
      <LinkButton
        back
        title="다음"
        to="/personal-info"
        disabled={!agreePersonalInfo}
        errorMessage="필수 사항을 동의해주세요."
      />
    </>
  );
};

export default Agreement;
