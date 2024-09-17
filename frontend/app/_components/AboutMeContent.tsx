import content from "@/app/_data/content.json";

const AboutMeContent = () => {
  const { text } = content.aboutMe;

  return (
    <div className="font-mono text-foreground flex items-center justify-center h-96">
      <div className=" max-w-2xl text-justify p-2 sm:p-0">
        {text.split("\n").map((line, index) => (
          <p key={index} className="sm:mb-4 mb-2 dark:text-white">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;
