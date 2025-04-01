import { API } from "../configs";
import { usePersonalInfoStore } from "../store";

export const useApi = () => {
  const personalInfoStore = usePersonalInfoStore();

  const postUserInfo = async () => {
    const body = {
      // TODO: 상태 반영 필요
      userInfoAgree: true,
      userName: personalInfoStore.name,
      useDateOfBirth: personalInfoStore.birth,
      // TODO: string 변경 필요
      userGender: personalInfoStore.gender === "MALE",
      userEdu: personalInfoStore.educationLevel,
      userPreResult: personalInfoStore.previousTestResults,
    };

    try {
      await API.post("signup", body);
    } catch (e) {
      console.error(e);
    }
  };

  return { postUserInfo };
};
