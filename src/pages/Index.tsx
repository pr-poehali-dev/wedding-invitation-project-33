import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { DetailsSection } from "@/components/DetailsSection";
import { ProgramSection } from "@/components/ProgramSection";
import { RsvpSection } from "@/components/RsvpSection";
import { ContactsSection } from "@/components/ContactsSection";

const Index = () => {
  return (
    <main style={{ background: "hsl(20,14%,6%)" }}>
      <HeroSection />
      <DetailsSection />
      <ProgramSection />
      <RsvpSection />
      <ContactsSection />
    </main>
  );
};

export default Index;
