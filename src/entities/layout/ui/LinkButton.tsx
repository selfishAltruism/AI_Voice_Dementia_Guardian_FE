"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const LinkButton = ({
  to,
  back,
  disabled,
  errorMessage,
  onBeforeNavigate,
  children,
}: {
  to: string;
  back?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onBeforeNavigate?: () => Promise<any>;
  children?: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 text-[26px] text-white">
      {back && (
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="flex h-[65px] w-[62px] items-center justify-center rounded-md border border-white bg-white bg-gradient-to-r text-5xl text-sub"
        >
          <span className="icon-[weui--back-filled]"></span>
        </button>
      )}
      <button
        onClick={() => {
          if (disabled && errorMessage) {
            toast.error(errorMessage);
            return;
          }
          if (onBeforeNavigate)
            throw onBeforeNavigate().then(() => {
              router.push(to);
            });
          else router.push(to);
        }}
        className="border-whit rounded-md border bg-gradient-to-r from-sub to-main bg-[length:200%_200%] px-10 py-3 transition-all duration-500 hover:animate-gradient"
      >
        <strong>{children}</strong>
      </button>
    </div>
  );
};
