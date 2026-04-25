import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { DetailsSection } from "@/components/DetailsSection";
import { ProgramSection } from "@/components/ProgramSection";
import { DressCodeSection } from "@/components/DressCodeSection";
import { RsvpSection } from "@/components/RsvpSection";
import { ContactsSection } from "@/components/ContactsSection";

const Index = () => {
  return (
    <main style={{ background: "hsl(36,33%,94%)" }}>
      <HeroSection />
      <DetailsSection />
      <ProgramSection />
      <DressCodeSection />
      <RsvpSection />
      <ContactsSection />
    </main>
  );
};

export default Index;