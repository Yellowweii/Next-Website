import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="container mx-auto px-8 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
