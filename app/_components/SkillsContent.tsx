import React from "react";

const skills = [
  { name: "JavaScript", level: "35%", color: "bg-[#FF6F00]" },
  { name: "React", level: "33%", color: "bg-[#FF9A13]" },
  { name: "TypeScript", level: "28%", color: "bg-[#FFA726]" },
  { name: "Next.js", level: "31%", color: "bg-[#FFCA28]" },
  { name: "TailWind", level: "30%", color: "bg-[#FFD54F]" },
];

const SkillsContent = () => {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="relative w-full h-6 rounded-full bg-transparent"
        >
          <div
            className={`absolute left-0 top-0 h-full rounded-full ${skill.color} text-black font-bold text-sm flex items-center justify-between px-3`}
            style={{ width: "auto" }}
          >
            <span className="text-black font-medium">{skill.name}</span>
            <span className="ml-4">{skill.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
