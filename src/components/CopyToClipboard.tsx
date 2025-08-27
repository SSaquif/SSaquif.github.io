import type { ReactNode } from "react";

interface CopyToClipboardProps {
  value: string;
  children: ReactNode;
}

export function CopyToClipboard({ value, children }: CopyToClipboardProps) {
  const handleClick = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        // @TODO: change alert to toast notification later
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}
