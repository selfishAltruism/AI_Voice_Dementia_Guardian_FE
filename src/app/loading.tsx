import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-30 text-2xl font-bold text-white">
        <BarLoader color="#31ac21" speedMultiplier={1} />
      </div>
    </>
  );
};
export default Loading;
