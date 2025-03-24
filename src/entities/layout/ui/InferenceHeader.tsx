import { inferenceHeaderTitle } from "@/shared";

export const InferenceHeader = ({ step }: { step: number }) => {
  return (
    <header className="fixed top-0 w-full px-10 py-10">
      <div>
        <h2>{inferenceHeaderTitle[step][0]}</h2>
        <h3>{inferenceHeaderTitle[step][1]}</h3>
      </div>
    </header>
  );
};
