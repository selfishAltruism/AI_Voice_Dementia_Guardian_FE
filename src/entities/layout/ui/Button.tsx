import React from "react";

export const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md border border-white bg-white bg-gradient-to-r px-11 py-4 text-4xl font-bold text-sub ${className}`}
    >
      {children}
    </button>
  );
};

export const FocusButton = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`animate-pulse-heart flex items-center justify-center rounded-md border border-white bg-white bg-gradient-to-r py-4 text-4xl font-bold text-sub transition-transform duration-300 ease-in-out hover:scale-100 hover:animate-none ${className}`}
    >
      {children}
    </button>
  );
};
