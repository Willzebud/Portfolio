"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section"; // Assuming this is your section wrapper component
import ProjectsContent from "./ProjectsContent";
import AboutMeContent from "./AboutMeContent";
import SkillsContent from "./SkillsContent";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Section className="flex flex-col items-center gap-6 mt-8">
      {/* Navigation Tabs */}
      <nav className="flex space-x-4 text-lg font-medium">
        <button
          onClick={() => handleTabClick("projects")}
          className={cn(
            activeTab === "projects" ? "text-primary" : "text-foreground",
            "hover:text-primary transition-colors duration-300"
          )}
        >
          Projects
        </button>
        <span>|</span>
        <button
          onClick={() => handleTabClick("about")}
          className={cn(
            activeTab === "about" ? "text-primary" : "text-foreground",
            "hover:text-primary transition-colors duration-300"
          )}
        >
          About me
        </button>
        <span>|</span>
        <button
          onClick={() => handleTabClick("skills")}
          className={cn(
            activeTab === "skills" ? "text-primary" : "text-foreground",
            "hover:text-primary transition-colors duration-300"
          )}
        >
          Skills
        </button>
      </nav>

      {/* Content for each tab */}
      <div className="w-full max-w-4xl h-96 mt-4 mb-8 bg-background border border-accent shadow-md transition-all duration-500">
        <AuroraBackground className="w-full max-w-4xl h-96 mb-8">
          {activeTab === "projects" && <ProjectsContent />}
          {activeTab === "about" && <AboutMeContent />}
          {activeTab === "skills" && <SkillsContent />}
        </AuroraBackground>
      </div>
    </Section>
  );
};
