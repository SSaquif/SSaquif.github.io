import * as Toast from "@radix-ui/react-toast";
import { styled } from "../stitches.config";

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 9999,
});

export const ToastRoot = styled(Toast.Root, {
  background: "$secondaryBackground",
  color: "$primaryText",
  borderRadius: 8,
  padding: "12px 24px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  fontSize: "1rem",
  minWidth: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
