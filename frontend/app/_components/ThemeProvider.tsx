"use client";

// @ts-ignore
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // @ts-ignore
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
