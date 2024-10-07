"use client";

// Importation du ThemeProvider de la bibliothèque `next-themes`
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

// Interface pour typer les props du composant
interface ThemeProviderProps {
  children: ReactNode; // Le composant prend en props des enfants à afficher
}

// Composant ThemeProvider
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Utilisation de NextThemesProvider pour fournir le contexte de thème aux enfants
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
