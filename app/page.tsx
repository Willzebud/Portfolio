import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { PortfolioSection } from "./_components/PortfolioSections";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <PortfolioSection />
    </main>
  );
}
