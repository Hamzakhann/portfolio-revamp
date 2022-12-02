import React, { useState } from "react";
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
  // let [dummyData, setDummyData] = useState([
  //   {
  //     name: "hello5",
  //     priority: 5,
  //   },
  //   {
  //     name: "hello2",
  //     priority: 2,
  //   },
  //   {
  //     name: "hello1",
  //     priority: 1,
  //   },
  //   {
  //     name: "hello3",
  //     priority: 3,
  //   },
  //   {
  //     name: "hello4",
  //     priority: 4,
  //   },
  // ]);

  // const handleFormatArrayByKey = (arr) =>
  //   arr?.sort(function (a, b) {
  //     return a.priority - b.priority;
  //   });

  // console.log(handleFormatArrayByKey(dummyData));

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
      <AllSkills />
      <Skills />
      <Portfolio />
      <Certifications />
      <GetInTouch />
      <SocialMedia />
      <Footer />
    </Layout>
  );
};

export default Home;
