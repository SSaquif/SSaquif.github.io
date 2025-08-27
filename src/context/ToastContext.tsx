import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { ToastRoot, ToastViewport } from "../components/Toast";

const ToastContext = createContext<(msg: ReactNode) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<ReactNode>();

  const showToast = useCallback((msg: ReactNode) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <RadixToast.Provider swipeDirection="down">
        <ToastRoot open={open} onOpenChange={setOpen} duration={1000}>
          {message}
        </ToastRoot>
        <ToastViewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
