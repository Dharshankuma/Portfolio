import React from "react";
import AboutSection from "../Components/About/AboutSection";
import PageWrapper from "../Animations/PageWrapper";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";

const About = () => {
  return (
    <PageWrapper>
      <AboutSection />
      <Skills />
      <Experience />
    </PageWrapper>
  );
};

export default About;
