import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
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
              md: "column-reverse",
              xs: "column-reverse",
              lg: "row",
            },
          }}
        >
          <Grid item xs={12} md={12} lg={7}>
            <div className={styles.hero_header_content_container}>
              <Typography variant="body1">
                Make The Difference - Make The Way
              </Typography>
              <div className={styles.heading}>
                <Typography variant="h1">Hamza Khan </Typography>
                <Image
                  src="/Images/hero_2.png"
                  alt="hero hand image"
                  width={60}
                  height={60}
                  objectFit="contain"
                />
              </div>
              <div className={styles.tag_line_container}>
                <Typography variant="h3">Full Stack Engineer</Typography>
                <div className={styles.tag_line}></div>
              </div>
              <Typography variant="h4">
                ✨ I am a modern full-stack cloud developer and architect with
                more than 4 years of experience in developing dynamic
                applications using MERN Stack , MEVN Stack and static content
                with JAMstack. I love to create applications around web and
                mobile with neat and clean code using best practices , test
                driven approach , latest trends in technology and using scalable
                architecture.
              </Typography>
              <Typography variant="h4">
                ✨I have worked with multiple startups and companies like PIAIC,
                Rightbound , HolonIQ , Valohai , Dame Dash Studios , Soprano ,
                Mintdropz , Ruvivo , Misfitz By Sunny Leone , Go Ubiq on Upwork
                and Freelancer.
              </Typography>
              <Typography variant="h4">
                ✨Launched multiple projects with different teams. I am always
                ready for new challanges. I transform Ideas into products.
                Customer Satisfaction is my foremost duty because I believe in
                long term relationships.{" "}
              </Typography>
              <div className={styles.btn_container}>
                <a href="/Resume.pdf" download="file">
                  <PrimaryButton>Lets Collaborate</PrimaryButton>
                </a>
                <SecondaryButton>Download Resume</SecondaryButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
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
