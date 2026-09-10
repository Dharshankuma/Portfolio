import React from "react";
import PageWrapper from "../Animations/PageWrapper";
import AboutSection from "../Components/About/AboutSection";
import EngineeringMindset from "../Components/Architecture/EngineeringMindset";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
import Education from "../Components/Education/Education";

const About = () => {
  return (
    <PageWrapper>
      <AboutSection />
      <EngineeringMindset />
      <Skills />
      <Experience />
      <Education />
    </PageWrapper>
  );
};

export default About;
