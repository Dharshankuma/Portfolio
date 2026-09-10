import React from "react";
import PageWrapper from "../Animations/PageWrapper";
import Hero from "../Components/Hero/Hero";
import AboutSection from "../Components/About/AboutSection";
import ProjectsSection from "../Components/Projects/ProjectsSection";
import EngineeringMindset from "../Components/Architecture/EngineeringMindset";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
import Education from "../Components/Education/Education";
import ContactSection from "../Components/Contact/ContactSection";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <EngineeringMindset />
      <Skills />
      <Experience />
      <Education />
      <ContactSection />
    </PageWrapper>
  );
};

export default Home;
