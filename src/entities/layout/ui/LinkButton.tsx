import Link from "next/link";

export const LinkButton = ({
  to,
  title,
  disabled,
}: {
  to: string;
  title: string;
  disabled?: boolean;
}) => (
  <Link
    href={disabled ? "#" : to}
    className="hover:animate-gradient fixed bottom-32 right-12 rounded-md bg-gradient-to-r from-[#7cfc6b] to-core bg-[length:200%_200%] px-5 py-3 text-xl text-white transition-all duration-500"
  >
    <strong>{title}</strong>
  </Link>
);

//transition duration-1000
