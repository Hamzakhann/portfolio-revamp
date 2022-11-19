import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.testimonials_container}>
      <h2>Testimonials</h2>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.testimonials_img_container}>
            <Image
              src="/Images/testimonials_new_1.png"
              alt="testimonials images"
              width={700}
              height={671}
              objecc="contain"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.testimonials_content_container}>
            <Image
              src="/Images/testimonials_5.jpg"
              alt="logo"
              width={200}
              height={200}
              objectFit="contain"
            />
            <h3>Matt Devlin</h3>
            <h4>USA</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;
