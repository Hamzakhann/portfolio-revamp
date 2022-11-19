import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { PrimaryButton } from "../Button/Button";
import styles from "./Portfolio.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-elastic-carousel";

const Portfolio = () => {
  const slideRef = useRef();
  const handleSlide = (func) => func();

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
        <Carousel showArrows={false} pagination={false} ref={slideRef}>
          {Array(3)
            .fill()
            .map((item, i) => (
              <Grid
                key={i}
                container
                spacing={4}
                className={styles.grid_container}
              >
                <Grid item xs={12} md={12} lg={5}>
                  <div className={styles.slider_img_container}>
                    <Image
                      src="/Images/testimonials_13.jpeg"
                      alt="Portfolio Image"
                      width={300}
                      height={400}
                      objectFit="contain"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={7}>
                  <div className={styles.slider_content_container}>
                    <h1>WineOnline</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
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
