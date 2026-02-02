import "./Hero.css";
import heroImage from "../../../public/images/Dharshan.png";
import { motion } from "framer-motion";
import PageWrapper from "../../Animations/PageWrapper";
import SectionWrapper from "../../Animations/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper>
      <section className="hero_section" id="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* IMAGE — FIRST ON MOBILE */}
            <div className="col-md-6 hero_image text-md-end text-center order-1 order-md-2">
              <img src={heroImage} alt="Dharshan portrait" />
            </div>

            {/* TEXT — SECOND ON MOBILE */}
            <div className="col-lg-6 col-md-6 hero_text order-2 order-md-1">
              <p className="hero_intro">Hello</p>
              <p className="hero_subline">— Dharshan ,Software developer</p>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Hero;
