import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8 flex items-center justify-center">
        <p className="test-muted-foreground text-sm">
          @Copywrite 2024 Willyam Ribière
        </p>
      </Section>
    </footer>
  );
};
