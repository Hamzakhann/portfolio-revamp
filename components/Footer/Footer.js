import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={3}>
          <div className={styles.logo_container}>
            <Image
              src="/Images/logo.png"
              alt="logo image"
              width={180}
              height={70}
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.links_container}>
            {/* <a href="#home">
              <p>Home</p>
            </a>
            <a href="#about">
              <p>About</p>
            </a>
            <p>Services</p>
            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
            <a href="#contact-form">
              <p>Contact us</p>
            </a> */}
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <div className={styles.agreement_container}>
            {/* <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link> */}
          </div>
        </Grid>
      </Grid>
      <p className={styles.footerLine}>
        @ 2022 Hamza Khan. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
