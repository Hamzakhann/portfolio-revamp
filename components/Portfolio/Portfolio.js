import { Grid } from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { PrimaryButton } from "../Button/Button";
import styles from "./Portfolio.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-elastic-carousel";

const Portfolio = () => {
  const slideRef = useRef();
  let [portfolios, setPortfolios] = useState([
    {
      title: "ALPHA PLUS EDUCATIONAL SYSTEM",
      description: `Alpha Plus uses research-based methods to help schools improve performance of every child with curriculum, assessments and data aligned solely to the Oklahoma Academic Standards.Teachers and administrators learn to use data in making decisions that improve instruction and student performance.`,
      img: "/Images/portfolio_1.png",
    },
    {
      title: "RIGHT BOUND REPORTING MODULE",
      description: `We’ve built a global, distributed team from day one, joining self-starting individuals from different backgrounds to build an extraordinary product and a customer-first company.`,
      img: "/Images/portfolio_2.png",
    },
    {
      title: "PALMETTO PARK",
      description: `Palmetto Park Realty was born out of necessity. We wanted to build a local boutique real estate brokerage that could harness technology to deliver a localized experience better than the big national portals can. Our site is 100% custom built with the real estate search needs of South Carolina in mind. Check out our Lake House guides for an example of how we are different.`,
      img: "/Images/portfolio_3.png",
    },
    {
      title: "VOLT",
      description: `We don’t try to be everything to everyone – we focus on what we do well and strive to do it better than anyone else. You can count on us to listen so that we understand your business, to be responsive to your requirements and timeframes, to be consultative in determining the best solution, and to be diligent in making sure your business has the people and processes it needs to succeed.
      `,
      img: "/Images/portfolio_4.png",
    },
    {
      title: "INURGI",
      description: `Sustainability is getting Inurgized: What we call it, how we talk about it, how we interact with it, how we make an impact and how it impacts us. We’re building a sustainability platform for everyone. Inclusive.  Accessible. Transparent.   Empowering.   `,
      img: "/Images/portfolio_5.png",
    },
    {
      title: "Ruvivo",
      description: `By pairing your team with a team of dedicated recruiters and AI, Ruvivo quickly understands your preferences and recommends candidates specifically for you based on their qualifications, work history, and team culture fit.`,
      img: "/Images/portfolio_6.png",
    },
    {
      title: "Soprano",
      description: `Soprano is a platform that connects you directly with your fanbase, you can scale thousands of fans to make your brand millions of dollars and be more engaged with your brand than ever before`,
      img: "/Images/portfolio_7.png",
    },
    {
      title: "Valohai",
      description: `We know that machine learning will change the world. Since 2016, we’ve helped data science teams build, test and deploy deep learning models 10× faster, and make a dent in the universe with their work. Our mission is to free machine learning teams from repetitive, mundane tasks. We allow data scientists to concentrate on building models and benefiting humankind with their discoveries.`,
      img: "/Images/portfolio_8.png",
    },
    {
      title: "Damedash",
      description: `OTT Platform Where You can find Exclusive content! Music, interviews, live performances, cooking, yoga, and therapy...entertaining and much more! All with our point of view. Committed to evolving the culture, self-awareness, healthy living, independence, and learning from our experience. Evolve with us!   `,
      img: "/Images/portfolio_9.png",
    },
    {
      title: "LUX RIDE",
      description: `If you cannot find covers for your car or van on our site just now, please don’t worry. Fill our contact form and we will get back to you as soon as we can. We offer covers for most makes and models available on the UK market.      `,
      img: "/Images/portfolio_10.png",
    },
    {
      title: "ON CART",
      description: `On-cart is the best online shopping platform in Zambia.We offer Cash on delivery & Free delivery
      `,
      img: "/Images/portfolio_11.png",
    },
    {
      title: "RDI",
      description: `Research and Development Initiative (RDI) is a non-profit, non-political & non-religious civil society organization. RDI is working in rural areas with the aim to empower the marginalized and vulnerable rural communities for sustainable development. The organization was established by young and energetic social activists who believed in values of transparency, accountability and Integrity. Through its innovative projects, RDI has been able to bring positive changes in community. RDI is registered under Societies Act 1860.      `,
      img: "/Images/portfolio_12.png",
    },
    {
      title: "APACE",
      description: `Apace providing your customer’s with an opportunity to get a refund and Payment Immediately and Instantly in real time at beginning or mid point or return process you’re ensuring a satisfied and happy returning customer`,
      img: "/Images/portfolio_13.png",
    },
    {
      title: "YZYTV",
      description: `OTT Platform`,
      img: "/Images/portfolio_14.png",
    },
    {
      title: "HPS",
      description: `No more pen and paper
      sign-in sheets for attendance.  There's a better way! Give your parents the Best Experience. `,
      img: "/Images/portfolio_15.png",
    },
    {
      title: "TIME BOOK",
      description: ``,
      img: "/Images/portfolio_16.png",
    },
    {
      title: "URBAN",
      description: ``,
      img: "/Images/portfolio_17.png",
    },
    {
      title: "CLUB PET",
      description: `PET CLUB is a family owned, Bay Area based, Pet Supply Superstore chain with 11 Greater Bay Area Store Locations in CA. We offer a wide variety of Pet Food and Pet Supplies and use our buying power to give you the lowest price possible. WHY PAY MORE !! Come shop and compare to start saving $$$
      `,
      img: "/Images/portfolio_18.png",
    },
  ]);
  const handleSlide = (func) => func();

  const slideGoto = (val, time) =>
    setTimeout(() => slideRef?.current?.goTo(val), time);

  return (
    <div className={`${styles.portfolio_container} portfolio_container`}>
      <h2>Portfolio</h2>
      <div className={styles.portfolio_slider_container}>
        <div
          className={styles.arrow}
          onClick={() => handleSlide(slideRef?.current?.onPrevStart)}
        >
          <ArrowBackIcon />
        </div>
        <Carousel
          showArrows={false}
          pagination={false}
          ref={slideRef}
          onNextStart={(e) =>
            e?.index === portfolios?.length - 1 && slideGoto(0, 200)
          }
        >
          {portfolios?.map((item, i) => (
            <Grid
              key={item?.title}
              container
              spacing={4}
              className={styles.grid_container}
            >
              <Grid item xs={12} md={12} lg={5}>
                <div className={styles.slider_img_container}>
                  <img src={item?.img} alt="Portfolio Image" />
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={7}>
                <div className={styles.slider_content_container}>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  {/* <div className={styles.slider_links_container}>
                    <Link href={"#"}>Android Versions</Link>
                    <Link href={"#"}>IOS Versions</Link>
                  </div> */}
                </div>
              </Grid>
            </Grid>
          ))}
        </Carousel>
        <div
          className={styles.arrow}
          onClick={() => handleSlide(slideRef?.current?.onNextStart)}
        >
          <ArrowForwardIcon />
        </div>
      </div>
      <div className={styles.btn_container}>
        <PrimaryButton>Let's Collaborate</PrimaryButton>
      </div>
    </div>
  );
};

export default Portfolio;
