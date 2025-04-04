"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const LinkButton = ({
  to,
  back,
  title,
  disabled,
  errorMessage,
  onBeforeNavigate,
}: {
  to: string;
  back?: boolean;
  title: string;
  disabled?: boolean;
  errorMessage?: string;
  onBeforeNavigate?: () => Promise<any>;
}) => {
  const router = useRouter();

  return (
    <div className="fixed bottom-32 right-12 flex gap-2 text-2xl text-white">
      {back && (
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="flex h-[59px] w-[59px] items-center justify-center rounded-md border border-white bg-white bg-gradient-to-r text-5xl text-sub"
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
        <strong>{title}</strong>
      </button>
    </div>
  );
};

//transition duration-1000
