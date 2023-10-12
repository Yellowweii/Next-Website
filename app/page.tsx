import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="container mx-auto px-8 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  );
}
