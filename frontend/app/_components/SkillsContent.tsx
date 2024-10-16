import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import axios from "axios";

// Import des icônes
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJsIcon } from "./icons/NextJsIcone";
import { TailWindIcon } from "./icons/TailWindIcon";
import { StrapiIcon } from "./icons/StrapiIcon";

// Mapping des noms d'icônes avec les composants React correspondants
const iconMapping: Record<string, React.ElementType> = {
  JavaScriptIcon: JavaScriptIcon,
  ReactIcon: ReactIcon,
  TypeScriptIcon: TypeScriptIcon,
  NextJsIcon: NextJsIcon,
  TailWindIcon: TailWindIcon,
  StrapiIcon: StrapiIcon,
};

interface Skill {
  skillID: number;
  skillName: string;
  timesExperience: string; // Champ String pour l'expérience
  skillIcon: string;
}

const SkillsContent = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  // Vérification du thème par défaut lors de l'arrivée sur le site
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          "https://wr-portfolio-268f1ff6ebd6.herokuapp.com/api/api-skills-contents"
        );
        // Filtrer pour retirer "Fun & Humour"
        const filteredSkills = response.data.data
          .map((skill: any) => skill.attributes)
          .filter((skill: Skill) => skill.skillName !== "Fun & Humour");
        setSkills(filteredSkills);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div
      id="skills-section"
      ref={skillsSectionRef}
      className="flex items-center justify-center overflow-auto px-4 h-96"
    >
      <div className="mx-auto flex flex-col gap-6 w-full max-w-4xl py-4">
        {/* Grille responsive : 3 colonnes sur mobile, 4 colonnes sur les grands écrans */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = iconMapping[skill.skillIcon];

            // Ajout de l'effet d'animation pour React
            const iconClassName =
              skill.skillName === "React" ? "animate-spin" : "";

            const iconStyle =
              skill.skillName === "React" ? { animationDuration: "10s" } : {};

            return (
              <div key={skill.skillID} className="flex flex-col items-center">
                <span className="w-12 h-12 mb-2">
                  {IconComponent && (
                    <IconComponent
                      size={48}
                      className={iconClassName}
                      style={iconStyle}
                    />
                  )}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    resolvedTheme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {skill.skillName}
                </span>
                <span
                  className={`text-sm ${
                    resolvedTheme === "dark"
                      ? "text-brandPrimary"
                      : "text-brandSecondary"
                  }`}
                >
                  {skill.timesExperience}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
