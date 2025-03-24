import { InferenceHeader } from "@/entities/layout";

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
    </>
  );
};

export default InferenceLayout;
