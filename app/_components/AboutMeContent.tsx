import content from "@/app/_data/content.json";

const AboutMeContent = () => {
  const { text } = content.aboutMe;

  return (
    <div className="font-mono text-justify text-foreground max-w-[50%] p-4">
      {text.split("\n").map((line, index) => (
        <p key={index} className="mb-4 dark:text-white">
          {line}
        </p>
      ))}
    </div>
  );
};

export default AboutMeContent;
