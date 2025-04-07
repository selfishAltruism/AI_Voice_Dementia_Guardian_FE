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

      handleDummyUpload("" + res.data.userId);
    } catch (e) {
      console.error(e);
    }
  };

  //TODO: 테스트 코드
  const handleDummyUpload = async (userId: string) => {
    const formData = new FormData();

    console.log(userId);
    formData.append("userId", userId);

    // public 디렉토리의 test.wav 파일을 fetch
    const response = await fetch("/test.wav");
    const blob = await response.blob();

    // File 객체로 변환
    const file = new File([blob], "test.wav", { type: "audio/wav" });

    // 동일 파일 여러 개 첨부
    for (let i = 0; i < 11; i++) {
      formData.append("files", file);
    }

    // 디버깅용 FormData 확인
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await FORMAPI.post("/upload", formData);

      console.log("Success:", res.data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return { postUserInfo };
};
