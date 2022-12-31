import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import styles from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <div className={styles.hero_header_container} id="home">
      <div className={styles.image_underLay}></div>
      <div className={styles.hero_header}>
        <Grid
          container
          sx={{
            flexDirection: {
              md: "row",
              xs: "column-reverse",
            }
          }}
        >
          <Grid item xs={12} md={7} lg={7}>
            <div className={styles.hero_header_content_container}>
              <Typography variant="body1">
                Make The Difference - Make The Way
              </Typography>
              <div className={styles.heading}>
                <Typography variant="h1">Hamza Khan 
                {/* <Image
                  src="/Images/hero_2.png"
                  alt="hero hand image"
                  width={60}
                  height={60}
                  objectFit="contain"
                /> */}
                </Typography>

              </div>
              <div className={styles.tag_line_container}>
                <Typography variant="h3">Full Stack Engineer</Typography>
                <div className={styles.tag_line}></div>
              </div>
              <Typography variant="h4">
                ✨ I am an expert <b>Full Stack</b> developer with more than 4
                years of experience in developing dynamic applications using
                MERN Stack , MEVN Stack and static content with JAM Stack. I
                love to create applications around web and mobile with neat and
                clean code using best practices , test driven approach , latest
                trends in technology and using scalable architecture.
              </Typography>
              <Typography variant="h4">
                ✨I have worked with multiple startups and companies like PIAIC,
                Rightbound , HolonIQ , Valohai , Dame Dash Studios , Soprano ,
                Mintdropz , Ruvivo , Misfitz By Sunny Leone , Go Ubiq.
              </Typography>
              <Typography variant="h4">
                ✨Launched multiple projects with different teams. I am always
                ready for new challanges. I transform Ideas into products.
                Customer Satisfaction is my foremost duty.
              </Typography>
              <div className={styles.btn_container}>
                <Link href="/#contact-form" passHref>
                  <PrimaryButton>Lets Collaborate</PrimaryButton>
                </Link>
                <a href="/Resume.pdf" download="resume">
                  <SecondaryButton>Download Resume</SecondaryButton>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <div className={styles.hero_header_img_container}>
              <Image
                src="/Images/hero_img.png"
                alt="hero header image"
                width={460}
                height={500}
                objectFit="contain"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroHeader;
