"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Composant pour gérer le basculement du mode (clair/sombre)
export function ModeToggle() {
  // Récupération de la fonction setTheme à partir du hook useTheme pour changer le thème
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      {/* Déclencheur du menu déroulant */}
      <DropdownMenuTrigger asChild>
        {/* Bouton pour basculer entre les icônes soleil et lune */}
        <Button
          variant="outline"
          size="icon"
          className="focus:outline-none focus:ring-0 focus:ring-offset-0 dark:text-white"
        >
          {/* Icône du soleil pour le thème clair */}
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Icône de la lune pour le thème sombre */}
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Contenu du menu déroulant avec les options de sélection */}
      <DropdownMenuContent align="end">
        {/* Option pour le thème clair */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        {/* Option pour le thème sombre */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
