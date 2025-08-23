import { useState, createContext, useContext, type ReactNode } from "react";

type SiteState = {
  rightAsideOpen: boolean;
  setRightAsideOpen: (open: boolean) => void;
  toggleRightAside: () => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
  toggleMobileDrawer: () => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  toggleDarkMode: () => void;
};

const SiteStateContext = createContext<SiteState | undefined>(undefined);

function SiteStateProvider({ children }: { children: ReactNode }) {
  const [rightAsideOpen, setRightAsideOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleRightAside = () => setRightAsideOpen(!rightAsideOpen);
  const toggleMobileDrawer = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <SiteStateContext.Provider
      value={{
        rightAsideOpen,
        setRightAsideOpen,
        toggleRightAside,
        mobileDrawerOpen,
        setMobileDrawerOpen,
        toggleMobileDrawer,
        darkMode,
        setDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </SiteStateContext.Provider>
  );
}

// custom hook for consuming the context
function useSiteState() {
  const context = useContext(SiteStateContext);
  if (context === undefined) {
    throw new Error("useSiteState must be used within a SiteStateProvider");
  }
  return context;
}

export { SiteStateProvider, useSiteState };
