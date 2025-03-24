"use client";

import { LinkButton } from "@/entities/layout";
import { usePersonalInfoStore } from "@/shared/store";
import {
  InputText,
  InputNumber,
  InputSelect,
  InputContainer,
} from "@/entities/layout";

const PersonalInfo = () => {
  const store = usePersonalInfoStore();

  return (
    <>
      <h1>기본 인적 사항</h1>
      <div className="mb-2 mt-1 h-[7px] w-[300px] rounded-lg bg-gradient-to-r from-sub to-main bg-[length:200%_200%]"></div>
      <div className="mt-3 flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div className="flex w-1/5 flex-col gap-6">
          <InputText
            label="이름"
            value={store.name}
            placeholder={"이름"}
            onChange={(value) => {
              store.setName(value);
            }}
          />
          <InputSelect
            label="성별"
            value={store.gender}
            options={[
              { value: null, label: "선택" },
              { value: "FEMALE", label: "여성" },
              { value: "MALE", label: "남성" },
            ]}
            onChange={(value) => {
              store.setGender(value);
            }}
          />
          <InputContainer label="주민번호">
            <div className="flex items-center gap-1">
              <InputText
                label=""
                value={store.firstResidentNumber}
                placeholder={"앞자리"}
                onChange={(value) => {
                  store.setFirstResidentNumber(value);
                }}
              />
              -
              <InputText
                label=""
                password
                value={store.lastResidentNumber}
                placeholder={"뒷자리"}
                onChange={(value) => {
                  store.setLastResidentNumber(value);
                }}
              />
            </div>
          </InputContainer>
        </div>
        <div className="flex w-1/5 flex-col gap-6">
          <InputNumber
            label="실제 나이"
            value={store.realAge}
            placeholder={"실제 나이"}
            onChange={(value) => {
              store.setRealAge(value);
            }}
          />
          <InputNumber
            label="등록 나이"
            value={store.registerAge}
            placeholder={"주민등록 상 나이"}
            onChange={(value) => {
              store.setRegisterAge(value);
            }}
          />
          <InputText
            label="생년월일(8자리)"
            value={store.birth}
            placeholder={"YYYYMMDD"}
            onChange={(value) => {
              store.setBirth(value);
            }}
          />
        </div>
      </div>

      <LinkButton title="검사 시작" to="/inference/1" back />
    </>
  );
};

export default PersonalInfo;
