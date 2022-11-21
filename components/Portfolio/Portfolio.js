import { Grid } from "@mui/material";
import Image from "next/image";
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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      img: "/Images/portfolio_1.png",
    },
    {
      title: "RIGHT BOUND REPORTING MODULE",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      img: "/Images/portfolio_2.png",
    },
    {
      title: "PALMETTO PARK",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      img: "/Images/portfolio_3.png",
    },
    {
      title: "VOLT",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.`,
      img: "/Images/portfolio_4.png",
    },
  ]);
  const handleSlide = (func) => func();

  const slideGoto = (val, time) =>
    setTimeout(() => slideRef?.current?.goTo(val), time);

  return (
    <div className={styles.portfolio_container}>
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
                  <Image
                    src={item?.img}
                    alt="Portfolio Image"
                    width={300}
                    height={400}
                    objectFit="contain"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={7}>
                <div className={styles.slider_content_container}>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <div className={styles.slider_links_container}>
                    <Link href={"#"}>Android Versions</Link>
                    <Link href={"#"}>IOS Versions</Link>
                  </div>
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
