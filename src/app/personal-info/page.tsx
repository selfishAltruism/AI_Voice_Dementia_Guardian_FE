"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { usePersonalInfoStore } from "@/shared/store";
import { useApi } from "@/shared/hooks";
import {
  LinkButton,
  InputText,
  InputNumber,
  InputSelect,
  InputContainer,
  InputDate,
  Checkbox,
} from "@/entities/layout";
import { useEffect } from "react";

const PersonalInfo = () => {
  // 모든 상태 사용하므로 구조분해할당 사용해도 무관
  const {
    agreePersonalInfo,
    name,
    setName,
    gender,
    setGender,
    birth,
    setBirth,
    educationLevel,
    setEducationLevel,
    previousTestResults,
    setPreviousTestResults,
  } = usePersonalInfoStore();

  const router = useRouter();

  useEffect(() => {
    if (agreePersonalInfo) return;
    toast.error("아래 사항을 동의해주세요.");
    router.replace("/agreement");
  }, []);

  const { postUserInfo } = useApi();

  return (
    <>
      <div className="h-[52px]" />
      <h1 className="w-[700px]">
        정확한 진단을 위해
        <br />
        아래 정보를 입력해주세요.
      </h1>
      <div className="mb-2 mt-1 h-[7px] w-[700px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]"></div>
      <div className="mt-3 flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div className="flex w-[335px] flex-col gap-6">
          <InputText
            label="이름"
            value={name}
            placeholder={"이름을 작성해주세요."}
            onChange={(value) => {
              setName(value);
            }}
          />
          <InputSelect
            label="성별"
            value={gender}
            options={[
              { value: null, label: "성별을 선택해주세요." },
              { value: "FEMALE", label: "여성" },
              { value: "MALE", label: "남성" },
            ]}
            onChange={(value) => {
              setGender(value);
            }}
          />
        </div>
        <div className="flex w-[335px] flex-col gap-6">
          <InputDate
            label="생년월일"
            value={birth}
            placeholder={"YYYYMMDD"}
            onChange={(value) => {
              setBirth(value);
            }}
          />
          <InputSelect
            label="최종 학력"
            value={educationLevel}
            options={[
              { value: null, label: "최종 학격을 선택해주세요." },
              { value: "NONE", label: "학력 없음" },
              { value: "PRIMARY_SCHOOL", label: "초등학교 졸업" },
              { value: "MIDDLE_SCHOOL", label: "중학교 졸업" },
              { value: "HIGH_SCHOOL", label: "고등학교 졸업" },
              { value: "BACHELOR", label: "학사 졸업" },
              { value: "MASTER", label: "석사 졸업" },
              { value: "DOCTORATE", label: "박사 졸업" },
            ]}
            onChange={(value) => {
              setEducationLevel(value);
            }}
          />
        </div>
      </div>

      <div className="mt-6 w-[700px]">
        <InputContainer label="혹시 이전에 비슷한 검사를 받으신 적 있으신가요?">
          {previousTestResults !== null ? (
            <InputSelect
              label=""
              value={previousTestResults}
              options={[
                { value: null, label: "이전 검사 결과를 선택해주세요." },
                { value: "잘 모르겠어요.", label: "잘 모르겠어요." },
                {
                  value: "조금 걱정된다고 들은 적 있어요.",
                  label: "조금 걱정된다고 들은 적 있어요.",
                },
                {
                  value: "경도인지장애 진단을 받은 적 있어요.",
                  label: "경도인지장애 진단을 받은 적 있어요.",
                },
                {
                  value: "치매 진단을 받은 적 있어요.",
                  label: "치매 진단을 받은 적 있어요.",
                },
              ]}
              onChange={(value) => {
                setPreviousTestResults(value);
              }}
            />
          ) : (
            <div className="h-[52px]" />
          )}
          <Checkbox
            onClick={() =>
              previousTestResults !== null
                ? setPreviousTestResults(null)
                : setPreviousTestResults("")
            }
            label="해당 없음"
            checked={previousTestResults === null}
          />
        </InputContainer>
      </div>

      <LinkButton
        to="/inference/1"
        back
        disabled={
          name === null &&
          gender === null &&
          birth === null &&
          educationLevel === null
        }
        errorMessage="모든 정보를 입력해주세요."
        onBeforeNavigate={postUserInfo}
      >
        검사 시작
      </LinkButton>
    </>
  );
};

export default PersonalInfo;
