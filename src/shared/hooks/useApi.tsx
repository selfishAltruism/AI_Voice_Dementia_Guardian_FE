import { AxiosResponse } from "axios";
import { FORMAPI, API } from "../configs";
import { usePersonalInfoStore, useInferenceInputDataStore } from "../store";

export const useApi = () => {
  const personalInfoStore = usePersonalInfoStore();
  const inferenceInputDataStore = useInferenceInputDataStore();

  const postUserInfo = async () => {
    const body = {
      userInfoAgree: personalInfoStore.agreeThirdPartyConsent,
      userName: personalInfoStore.name,
      userDateOfBirth: personalInfoStore.birth,
      userGender: personalInfoStore.gender,
      userEdu: personalInfoStore.educationLevel,
      userPreResult: personalInfoStore.previousTestResults,
    };

    try {
      const { data: res } = (await API.post(
        "signup",
        body,
      )) as AxiosResponse<Res.SignUp>;

      if (res.status !== "success") console.error(res.message);

      inferenceInputDataStore.setUserId(res.data.userId);
    } catch (e) {
      console.error(e);
    }
  };

  //TODO: 테스트 코드
  const handleDummyUpload = async (userId: string) => {
    const formData = new FormData();

    console.log(userId);
    formData.append("userId", "" + userId);

    // 더미 WAV 헤더 생성 (RIFF....WAVE 시그니처 일부)
    const wavHeader = new Uint8Array([
      0x52, 0x49, 0x46, 0x46, 0x00, 0x00, 0x00, 0x00, 0x57, 0x41, 0x56, 0x45,
    ]);
    const blob = new Blob([wavHeader], { type: "audio/wav" });

    // 파일 11개 추가
    for (let i = 0; i < 11; i++) {
      const file = new File([blob], `test${(i % 3) + 1}.wav`, {
        type: "audio/wav",
      });
      formData.append("files", file);
    }

    try {
      const res = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", res.data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return { postUserInfo };
};
