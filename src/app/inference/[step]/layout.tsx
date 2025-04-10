import { InferenceHeader, LinkButton } from "@/entities/layout";

const InferenceLayout = ({
  children,
  params: { step },
}: {
  children: React.ReactNode;
  params: {
    step: string;
  };
}) => {
  return (
    <>
      <InferenceHeader step={+step} />
      {children}
      {step !== "12" && (
        <LinkButton to={"/inference/" + (+step + 1)} back>
          다음
        </LinkButton>
      )}
    </>
  );
};

export default InferenceLayout;
