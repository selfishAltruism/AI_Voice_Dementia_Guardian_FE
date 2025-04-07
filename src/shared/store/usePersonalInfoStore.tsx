import { create } from "zustand";

interface PersonalInfo {
  agreePersonalInfo: boolean;
  setAgreePersonalInfo: (agree: boolean) => void;

  agreeThirdPartyConsent: boolean;
  setAgreeThirdPartyConsent: (agree: boolean) => void;

  // 기본 정보
  name: string | null;
  setName: (name: string | null) => void;

  gender: "FEMALE" | "MALE" | null;
  setGender: (gender: "FEMALE" | "MALE" | null) => void;

  birth: string | null;
  setBirth: (birth: string | null) => void;

  educationLevel: Personal.EducationLevel | null;
  setEducationLevel: (educationLevel: Personal.EducationLevel) => void;

  previousTestResults: string | null;
  setPreviousTestResults: (previousTestResults: string) => void;

  isPersonalInfoComplete: () => boolean;
}

export const usePersonalInfoStore = create<PersonalInfo>((set, get) => ({
  agreePersonalInfo: false,
  setAgreePersonalInfo: (agreePersonalInfo) =>
    set(() => ({ agreePersonalInfo })),

  agreeThirdPartyConsent: false,
  setAgreeThirdPartyConsent: (agreeThirdPartyConsent) =>
    set(() => ({ agreeThirdPartyConsent })),

  // 기본 정보
  name: null,
  setName: (name: string) => set(() => ({ name })),

  gender: null,
  setGender: (gender: "FEMALE" | "MALE") => set(() => ({ gender })),

  birth: null,
  setBirth: (birth: string | null) => set(() => ({ birth })),

  educationLevel: null,
  setEducationLevel: (educationLevel) => set(() => ({ educationLevel })),

  previousTestResults: null,
  setPreviousTestResults: (previousTestResults) =>
    set(() => ({ previousTestResults })),

  isPersonalInfoComplete: () => {
    const { name, gender, birth, educationLevel } = get();
    return (
      name !== null &&
      gender !== null &&
      birth !== null &&
      educationLevel !== null
    );
  },
}));
