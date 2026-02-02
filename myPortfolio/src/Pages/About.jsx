import React from "react";
import AboutSection from "../Components/About/AboutSection";
import PageWrapper from "../Animations/PageWrapper";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
import Education from "../Components/Education/Education";
const About = () => {
  return (
    <PageWrapper>
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
    </PageWrapper>
  );
};

export default About;
