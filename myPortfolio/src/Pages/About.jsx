import React from "react";
import AboutSection from "../Components/About/AboutSection";
import PageWrapper from "../Animations/PageWrapper";
import Skills from "../Components/Skills/Skills";

const About = () => {
  return (
    <PageWrapper>
      <AboutSection />
      <Skills />
    </PageWrapper>
  );
};

export default About;
