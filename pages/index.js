import React from "react";
import Layout from "../layout/layout";
import HeroHeader from "../components/HeroHeader/HeroHeader";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";
import ChooseMe from "../components/ChooseMe/ChooseMe";
import ExperienceBarRate from "../components/ExperienceBarRate/ExperienceBarRate";
import Experience from "../components/Experience/Experience";
import FindMeOn from "../components/FindMeOn/FindMeOn";
import Academics from "../components/Academics/Academics";
import HowWork from "../components/HowWork/HowWork";
import Testimonials from "../components/Testimonials/Testimonials";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Certifications from "../components/Certifications/Certifications";
import Footer from "../components/Footer/Footer";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import AllSkills from "../components/AllSkills/AllSkills";

const Home = () => {
  return (
    <Layout>
      <HeroHeader />
      <TrustedCompanies />
      <ChooseMe />
      <Portfolio />
      <ExperienceBarRate />
      <Academics />

      <HowWork />
      <Experience />

      <Testimonials />
      <AllSkills />

      <Certifications />
      <GetInTouch />
      <SocialMedia />
      <Footer />
      {/* <FindMeOn /> */}
      {/* <Skills /> */}
    </Layout>
  );
};

export default Home;
