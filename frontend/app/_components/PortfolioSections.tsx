"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import ProjectsContent from "./ProjectsContent";
import AboutMeContent from "./AboutMeContent";
import SkillsContent from "./SkillsContent";
import { AuroraBackground } from "@/components/ui/aurora-background";

// Composant principal pour les sections du portfolio avec onglets de navigation
export const PortfolioSection = () => {
  // State pour gérer l'onglet actif (par défaut sur "projects")
  const [activeTab, setActiveTab] = useState("projects");

  // Fonction de gestion du clic sur les onglets
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Section className="flex flex-col items-center gap-6 dark:text-white">
      {/* Onglets de navigation */}
      <nav className="flex space-x-4 text-lg font-medium">
        {/* Onglet Projets */}
        <button
          onClick={() => handleTabClick("projects")}
          className={cn(
            activeTab === "projects"
              ? "text-brandSecondary dark:text-brandPrimary"
              : "text-foreground dark:text-white",
            "hover:text-brandSecondary dark:hover:text-brandPrimary transition-colors duration-300"
          )}
        >
          Projets
        </button>
        <span>|</span>
        {/* Onglet À propos */}
        <button
          onClick={() => handleTabClick("about")}
          className={cn(
            activeTab === "about"
              ? "text-brandSecondary dark:text-brandPrimary"
              : "text-foreground dark:text-white",
            "hover:text-brandSecondary dark:hover:text-brandPrimary transition-colors duration-300"
          )}
        >
          À propos
        </button>
        <span>|</span>
        {/* Onglet Compétences */}
        <button
          onClick={() => handleTabClick("skills")}
          className={cn(
            activeTab === "skills"
              ? "text-brandSecondary dark:text-brandPrimary"
              : "text-foreground dark:text-white",
            "hover:text-brandSecondary dark:hover:text-brandPrimary transition-colors duration-300"
          )}
        >
          Skills
        </button>
      </nav>

      {/* Contenu de l'onglet actif */}
      <div className="w-full max-w-4xl h-96 bg-background border border-accent shadow-md transition-all duration-500">
        <AuroraBackground className="w-full max-w-4xl h-96 mb-8 overflow-hidden">
          {activeTab === "projects" && <ProjectsContent />}{" "}
          {/* Affiche les projets */}
          {activeTab === "about" && <AboutMeContent />}{" "}
          {/* Affiche la section À propos */}
          {activeTab === "skills" && <SkillsContent />}{" "}
          {/* Affiche les compétences */}
        </AuroraBackground>
      </div>
    </Section>
  );
};
