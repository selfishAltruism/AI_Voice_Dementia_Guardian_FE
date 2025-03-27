"use client";

import { ReactNode } from "react";

const baseInputStyle =
  "text-black w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-white focus:outline-none";
const labelStyle = "font-bold block text-2xl font-medium text-gray-700 mb-1";

export const InputContainer = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="relative w-full">
    <label className={labelStyle + "mb-0"}>{label}</label>
    {children}
  </div>
);

export function InputText({
  label,
  value,
  onChange,
  placeholder,
  password,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  password?: boolean;
}) {
  return (
    <div>
      <label className={labelStyle}>{label}</label>
      <input
        type={!password ? "text" : "password"}
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
        className={`${baseInputStyle} border-gray-300 h-[50px] border-r-4 border-white bg-white text-main`}
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

export function InputDate({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className={labelStyle}>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${baseInputStyle} border-gray-300 h-[50px] bg-white text-main`}
      />
    </div>
  );
}
