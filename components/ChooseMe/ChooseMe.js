import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import styles from "./ChooseMe.module.scss";

const ChooseMe = () => {
  return (
    <div className={styles.why_choose_me_container}>
      <Grid
        container
        spacing={5}
        sx={{
          flexDirection: {
            md: "column-reverse",
            xs: "column-reverse",
            lg: "row",
          },
        }}
      >
        <Grid item xs={12} md={12} lg={7}>
          <div className={styles.choose_me_content_container}>
            <h2>WHY CHOOSE ME</h2>
            <p>
              Because we are a highly skilled team of creative geniuses who are
              passionate about their work and our developers are expert
              professionals in a range of new and existing platforms. We can
              design web, desktop, and mobile applications using any technology.{" "}
            </p>
            <p>
              Trust us to design solutions that combine a solid technical
              background with a user-friendly and contemporary interface.
            </p>
            <p>
              Trust us to design solutions that combine a solid technical
              background with a user-friendly and contemporary interface.
            </p>
            <div className={styles.btn_container}>
              <PrimaryButton>Let's Collaborate</PrimaryButton>
              <SecondaryButton>Connect on Whatsapp</SecondaryButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <div className={styles.choose_me_img_container}>
            <Image
              src="/Images/believe_1.png"
              alt="choose me image"
              width={500}
              height={534}
              objectFit="contain"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChooseMe;
