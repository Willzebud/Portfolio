import content from "@/app/_data/content.json";

const AboutMeContent = () => {
  const { text } = content.aboutMe;

  return (
    <div className="font-mono text-foreground">
      <p>{text}</p>
    </div>
  );
};

export default AboutMeContent;
