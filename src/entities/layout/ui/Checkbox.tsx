export const Checkbox = ({
  checked,
  onClick,
  label,
}: {
  checked: boolean;
  onClick: () => void;
  label: string;
}) => (
  <div className="absolute right-0 top-[3px] flex items-center gap-2">
    <div
      onClick={onClick}
      className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-2 ${
        checked ? "bg-core bg-core" : "border-gray-300 bg-white"
      }`}
    >
      <span className="icon-[tabler--check]"></span>
    </div>
    <p>{label}</p>
  </div>
);
