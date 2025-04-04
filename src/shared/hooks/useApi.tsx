import { AxiosResponse } from "axios";
import { API } from "../configs";
import { usePersonalInfoStore, useInferenceInputDataStore } from "../store";

export const useApi = () => {
  const personalInfoStore = usePersonalInfoStore();
  const inferenceInputDataStore = useInferenceInputDataStore();

  const postUserInfo = async () => {
    const body = {
      userInfoAgree: true,
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

  return { postUserInfo };
};
