import type { ReactNode } from "react";
import { useToast } from "../context/ToastContext";
import { Clipboard } from "lucide-react";
import { styled } from "../stitches.config";

interface CopyToClipboardProps {
  value: string;
  children: ReactNode;
}

export function CopyToClipboard({ value, children }: CopyToClipboardProps) {
  const showToast = useToast();

  const handleClick = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        showToast(
          <TextSpan>
            <Clipboard size={16} style={{ marginRight: 4 }} />
            Copied to clipboard!
          </TextSpan>
        );
      })
      .catch((err) => {
        showToast("Failed to copy! " + err);
      });
  };
  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

const TextSpan = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 8,
});
