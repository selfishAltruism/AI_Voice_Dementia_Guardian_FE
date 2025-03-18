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
}) => (
  <div className="fixed bottom-32 right-12 flex gap-2 text-xl text-white">
    {back && (
      <Link
        href=".."
        className="bg-litegray rounded-md bg-gradient-to-r px-10 py-3 pt-4 text-2xl text-black"
      >
        <span className="icon-[weui--back-filled]"></span>
      </Link>
    )}
    <Link
      href={disabled ? "#" : to}
      className="rounded-md bg-gradient-to-r from-[#7cfc6b] to-core bg-[length:200%_200%] px-10 py-3 pt-4 transition-all duration-500 hover:animate-gradient"
    >
      <strong>{title}</strong>
    </Link>
  </div>
);

//transition duration-1000
