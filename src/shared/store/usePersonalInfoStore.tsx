import { create } from "zustand";

interface PersonalInfo {
  // 기본 정보
  name: string | null;
  setName: (name: string | null) => void;

  gender: "FEMALE" | "MALE" | null;
  setGender: (gender: "FEMALE" | "MALE" | null) => void;

  firstResidentNumber: string | null;
  setFirstResidentNumber: (firstResidentNumber: string | null) => void;

  lastResidentNumber: string | null;
  setLastResidentNumber: (lastResidentNumber: string | null) => void;

  realAge: number | null;
  setRealAge: (realAge: number | null) => void;

  registerAge: number | null;
  setRegisterAge: (registerAge: number | null) => void;

  birth: string | null;
  setBirth: (birth: string | null) => void;

  yearsOfEducation: number | null;
  setYearsOfEducation: (yearsOfEducation: number | null) => void;

  isIlliterate: "ILLITERATE" | "ONLY_READ" | "NOT_ILLITERATE" | null;
  setIsIlliterate: (
    isIlliterate: "ILLITERATE" | "ONLY_READ" | "NOT_ILLITERATE" | null,
  ) => void;

  phoneNumber: string | null;
  setPhoneNumber: (phoneNumber: string | null) => void;

  homePhoneNumber: string | null;
  setHomePhoneNumber: (homePhoneNumber: string | null) => void;

  serviceUseAddress: string | null;
  setServiceUseAddress: (serviceUseAddress: string | null) => void;

  registerAddress: string | null;
  setRegisterAddress: (registerAddress: string | null) => void;

  // 거주 상태
  residenceType:
    | "HOME"
    | "ELDERLY_LIVING_HOUSE"
    | "ELDERLY_WELFARE_HOUSE"
    | "LONG_TERM_CARE_FACILITY"
    | "ELDERLY_PROTECTION_FACILITY"
    | "SENIOR_COMMUNITY_CENTER"
    | "NURSING_HOSPITAL"
    | "GENERAL_HOSPITAL"
    | "PRIVATE_HOME"
    | "ETC"
    | null;
  setResidenceType: (residenceType: PersonalInfo["residenceType"]) => void;

  residenceTypeETC: string | null;
  setResidenceTypeETC: (residenceTypeETC: string | null) => void;

  // 동거 형태
  cohabitationType:
    | "ALONE"
    | "WITH_SPOUSE"
    | "WITH_FAMILY"
    | "WITH_RELATIVES"
    | "WITH_DEMENTIA_PATIENT"
    | "ETC"
    | null;
  setCohabitationType: (
    cohabitationType: PersonalInfo["cohabitationType"],
  ) => void;

  // 의료 보장
  medicalCoverage: "GENERAL" | "CATEGORY_1" | "CATEGORY_2" | "UNINSURED" | null;
  setMedicalCoverage: (
    medicalCoverage: PersonalInfo["medicalCoverage"],
  ) => void;

  // 소득 수준
  incomeLevel: "BASIC_RECIPIENT" | "NEAR_POOR" | "EXEMPT" | null;
  setIncomeLevel: (incomeLevel: PersonalInfo["incomeLevel"]) => void;

  // 장기 요양 등급
  longTermCareGrade:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | "COGNITIVE_SUPPORT"
    | "DONT_KNOW"
    | "A"
    | "B"
    | "C"
    | null;
  setLongTermCareGrade: (
    longTermCareGrade: PersonalInfo["longTermCareGrade"],
  ) => void;

  longTermCareGradesalary: boolean;
  setLongTermCareGradesalary: (longTermCareGradesalary: boolean) => void;

  whyLongTermCareGradesalaryFalse: string | null;
  setWhyLongTermCareGradesalaryFalse: (
    whyLongTermCareGradesalaryFalse: string | null,
  ) => void;
}

export const usePersonalInfoStore = create<PersonalInfo>((set, get) => ({
  // 기본 정보
  name: null,
  setName: (name: string) => set(() => ({ name })),

  gender: null,
  setGender: (gender: "FEMALE" | "MALE") => set(() => ({ gender })),

  firstResidentNumber: null,
  setFirstResidentNumber: (firstResidentNumber: string) =>
    set(() => ({ firstResidentNumber })),

  lastResidentNumber: null,
  setLastResidentNumber: (lastResidentNumber: string) =>
    set(() => ({ lastResidentNumber })),

  realAge: null,
  setRealAge: (realAge: number) => set(() => ({ realAge })),

  registerAge: null,
  setRegisterAge: (registerAge: number) => set(() => ({ registerAge })),

  birth: null,
  setBirth: (birth: string) => set(() => ({ birth })),

  yearsOfEducation: null,
  setYearsOfEducation: (yearsOfEducation: number) =>
    set(() => ({ yearsOfEducation })),

  isIlliterate: null,
  setIsIlliterate: (
    isIlliterate: "ILLITERATE" | "ONLY_READ" | "NOT_ILLITERATE",
  ) => set(() => ({ isIlliterate })),

  phoneNumber: null,
  setPhoneNumber: (phoneNumber: string) => set(() => ({ phoneNumber })),

  homePhoneNumber: null,
  setHomePhoneNumber: (homePhoneNumber: string) =>
    set(() => ({ homePhoneNumber })),

  serviceUseAddress: null,
  setServiceUseAddress: (serviceUseAddress: string) =>
    set(() => ({ serviceUseAddress })),

  registerAddress: null,
  setRegisterAddress: (registerAddress: string) =>
    set(() => ({ registerAddress })),

  // 거주 상태
  residenceType: null,
  setResidenceType: (
    residenceType:
      | "HOME"
      | "ELDERLY_LIVING_HOUSE"
      | "ELDERLY_WELFARE_HOUSE"
      | "LONG_TERM_CARE_FACILITY"
      | "ELDERLY_PROTECTION_FACILITY"
      | "SENIOR_COMMUNITY_CENTER"
      | "NURSING_HOSPITAL"
      | "GENERAL_HOSPITAL"
      | "PRIVATE_HOME"
      | "ETC",
  ) => set(() => ({ residenceType })),

  residenceTypeETC: null,
  setResidenceTypeETC: (residenceTypeETC: string) =>
    set(() => ({ residenceTypeETC })),

  // 동거 형태
  cohabitationType: null,
  setCohabitationType: (
    cohabitationType:
      | "ALONE"
      | "WITH_SPOUSE"
      | "WITH_FAMILY"
      | "WITH_RELATIVES"
      | "WITH_DEMENTIA_PATIENT"
      | "ETC",
  ) => set(() => ({ cohabitationType })),

  // 의료 보장
  medicalCoverage: null,
  setMedicalCoverage: (
    medicalCoverage: "GENERAL" | "CATEGORY_1" | "CATEGORY_2" | "UNINSURED",
  ) => set(() => ({ medicalCoverage })),

  // 소득 수준
  incomeLevel: null,
  setIncomeLevel: (incomeLevel: "BASIC_RECIPIENT" | "NEAR_POOR" | "EXEMPT") =>
    set(() => ({ incomeLevel })),

  // 장기 요양 등급
  longTermCareGrade: null,
  setLongTermCareGrade: (
    longTermCareGrade:
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | "COGNITIVE_SUPPORT"
      | "DONT_KNOW"
      | "A"
      | "B"
      | "C",
  ) => set(() => ({ longTermCareGrade })),

  longTermCareGradesalary: null,
  setLongTermCareGradesalary: (longTermCareGradesalary: boolean) =>
    set(() => ({ longTermCareGradesalary })),

  whyLongTermCareGradesalaryFalse: null,
  setWhyLongTermCareGradesalaryFalse: (
    whyLongTermCareGradesalaryFalse: string,
  ) => set(() => ({ whyLongTermCareGradesalaryFalse })),
}));
