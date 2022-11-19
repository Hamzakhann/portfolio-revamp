import React from "react";
import { Typography } from "@mui/material";
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

const Home = () => {
  return (
    <Layout>
      <HeroHeader />
      <TrustedCompanies />
      <ChooseMe />
      <ExperienceBarRate />
      <Experience />
      <FindMeOn />
      <Academics />
      <HowWork />
      <Testimonials />
      <Skills />
      <Portfolio />
      <Certifications />
      <SocialMedia />
      <Footer />
    </Layout>
  );
};

export default Home;
