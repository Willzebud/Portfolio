import content from "@/app/_data/content.json"; // Importez le contenu JSON

const AboutMeContent = () => {
  const { text } = content.aboutMe; // Extraire le contenu depuis JSON

  return (
    <div className="font-mono text-foreground">
      <p>{text}</p>
    </div>
  );
};

export default AboutMeContent;
