import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { DetailsSection } from "@/components/DetailsSection";
import { ProgramSection } from "@/components/ProgramSection";
import { DressCodeSection } from "@/components/DressCodeSection";
import { WishesSection } from "@/components/WishesSection";
import { RsvpSection } from "@/components/RsvpSection";

const Index = () => {
  return (
    <main style={{ background: "hsl(36,33%,94%)" }}>
      <HeroSection />
      <DetailsSection />
      <ProgramSection />
      <DressCodeSection />
      <WishesSection />
      <RsvpSection />
    </main>
  );
};

export default Index;