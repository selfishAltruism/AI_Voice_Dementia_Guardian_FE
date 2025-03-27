"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export const LinkButton = ({
  to,
  back,
  title,
  disabled,
}: {
  to: string;
  back?: boolean;
  title: string;
  disabled?: boolean;
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
      <Link
        href={disabled ? "#" : to}
        className="border-whit rounded-md border bg-gradient-to-r from-sub to-main bg-[length:200%_200%] px-10 py-3 transition-all duration-500 hover:animate-gradient"
      >
        <strong>{title}</strong>
      </Link>
    </div>
  );
};

//transition duration-1000
