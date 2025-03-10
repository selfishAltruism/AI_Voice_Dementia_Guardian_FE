"use client";

import { LinkButton } from "@/entities/layout";
import { usePersonalInfoStore } from "@/shared/store";
import { InputText, InputNumber, InputSelect } from "@/entities/layout";

const PersonalInfo = () => {
  const store = usePersonalInfoStore();

  return (
    <>
      <h1>인적 사항</h1>
      <div className="mt-3 flex w-full flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex w-1/5 flex-col gap-3">
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
            value={store.name}
            options={[
              { value: "남자", label: "남자" },
              { value: "남자", label: "남자" },
            ]}
            onChange={() => {}}
          ></InputSelect>
        </div>
        <div className="w-1/5">
          <InputText
            label="이름"
            value={store.name}
            placeholder={"이름"}
            onChange={() => {}}
          />
        </div>
      </div>

      <LinkButton title="AI 음성 등록" to="/inference" />
    </>
  );
};

export default PersonalInfo;
