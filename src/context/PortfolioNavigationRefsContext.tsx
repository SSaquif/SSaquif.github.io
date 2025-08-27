import { createContext, useContext, useRef } from "react";
import type { RefObject, ReactNode } from "react";

export type SectionRef = RefObject<HTMLDivElement | null>;

export type PortfolioNavigationRefs = {
  introRef: SectionRef;
  aboutRef: SectionRef;
  experienceRef: SectionRef;
  educationRef: SectionRef;
  publicationRef: SectionRef;
  projectsRef: SectionRef;
};

const PortfolioNavigationRefsContext = createContext<
  PortfolioNavigationRefs | undefined
>(undefined);

export function PortfolioNavigationRefsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const publicationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <PortfolioNavigationRefsContext.Provider
      value={{
        introRef,
        aboutRef,
        experienceRef,
        educationRef,
        publicationRef,
        projectsRef,
      }}
    >
      {children}
    </PortfolioNavigationRefsContext.Provider>
  );
}

export function usePortfolioNavigationRefs() {
  const ctx = useContext(PortfolioNavigationRefsContext);
  if (!ctx)
    throw new Error(
      "usePortfolioNavigationRefs must be used within PortfolioNavigationRefsProvider"
    );
  return ctx;
}
