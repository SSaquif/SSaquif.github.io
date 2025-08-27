import {
  useState,
  createContext,
  useContext,
  type ReactNode,
  type MouseEvent,
} from "react";

type SiteState = {
  rightDrawerOpen: boolean;
  setRightDrawerOpen: (open: boolean) => void;
  toggleRightDrawer: () => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
  toggleMobileDrawer: () => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  toggleDarkMode: () => void;
};

const SiteStateContext = createContext<SiteState | undefined>(undefined);

function SiteStateProvider({ children }: { children: ReactNode }) {
  const [rightDrawerOpen, setRightDrawerOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleRightDrawer = (ev?: MouseEvent) => {
    ev?.stopPropagation();
    setRightDrawerOpen(!rightDrawerOpen);
  };
  const toggleMobileDrawer = (ev?: MouseEvent) => {
    ev?.stopPropagation();
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const toggleDarkMode = (ev?: MouseEvent) => {
    ev?.stopPropagation();
    setDarkMode(!darkMode);
  };

  return (
    <SiteStateContext.Provider
      value={{
        rightDrawerOpen,
        setRightDrawerOpen,
        toggleRightDrawer,
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
