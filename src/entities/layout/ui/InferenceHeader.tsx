import { inferenceHeaderTitle } from "@/shared";

export const InferenceHeader = ({ step }: { step: number }) => {
  return (
    <header className="fixed top-0 flex w-full justify-between px-[18px] py-3">
      <div>
        <h2>{inferenceHeaderTitle[step][0]}</h2>
        <h3>{inferenceHeaderTitle[step][1]}</h3>
      </div>
      <ProgressCircles step={step} />
    </header>
  );
};

interface ProgressCirclesProps {
  step: number;
}

const ProgressCircles: React.FC<ProgressCirclesProps> = ({ step }) => {
  return (
    <div className="mt-2 flex gap-3">
      {[...Array(11)].map((_, index) => (
        <div
          key={index}
          className={`border-gray-400 h-6 w-6 rounded-full border ${
            index < step ? "bg-white" : ""
          }`}
        />
      ))}
    </div>
  );
};
