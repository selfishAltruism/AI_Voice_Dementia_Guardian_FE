import { create } from "zustand";
import { produce } from "immer";

interface InferenceInputData {
  userId: number | null;
  setUserId: (id: number) => void;

  files: (Blob | null)[];
  setFile: (file: Blob, index: number) => void;

  checkBeforeFiles: (index: number) => number;
}

export const useInferenceInputDataStore = create<InferenceInputData>(
  (set, get) => ({
    userId: null,
    setUserId: (id) =>
      set(
        produce((state) => {
          state.userId = id;
        }),
      ),

    files: Array.from({ length: 12 }, () => null), // 0 미사용
    setFile: (file, index) =>
      set(
        produce((state) => {
          state.files[index] = file;
        }),
      ),

    checkBeforeFiles: (index) => {
      const { files } = get();

      return files.slice(1, index).findIndex((element) => !element);
    },
  }),
);
