"use client";

const baseInputStyle =
  "w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-core focus:outline-none";
const labelStyle = "block text-lg font-medium text-gray-700 mb-1";

export function InputText({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className={labelStyle}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${baseInputStyle} border-gray-300`}
      />
    </div>
  );
}

export function InputNumber({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className={labelStyle}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
        className={`${baseInputStyle} border-gray-300`}
      />
    </div>
  );
}

export function InputSelect({ label, options, value, onChange }) {
  return (
    <div>
      <label className={labelStyle}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseInputStyle} border-gray-300 h-[42px] bg-white`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
