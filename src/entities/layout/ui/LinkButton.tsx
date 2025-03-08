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
    className="fixed bottom-32 right-12 rounded-md bg-core px-5 py-3 text-white"
  >
    <strong>{title}</strong>
  </Link>
);
