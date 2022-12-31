import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import styles from "./ChooseMe.module.scss";

const ChooseMe = () => {
  return (
    <div className={styles.why_choose_me_container} id="about">
      <Grid
        container
        spacing={5}
        sx={{
          flexDirection: {
            md: "row",
            xs: "column-reverse",
          }
        }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <div className={styles.choose_me_content_container}>
            <h2>MY BELIEVE</h2>
            <p>
              I believe in teamwork. I believe a group of people who work
              together can accomplish really big goals. When people work
              together and encourage each other great things happen.
            </p>
            <p>
              Working in teams increases collaboration and allows brainstorming.
              As a result, more ideas are developed and productivity improves.
              Two or more people are always better than one for solving
              problems, finishing off difficult tasks and increasing creativity.
            </p>
            <p>Let’s connect with me so we can do something big:)</p>
            <div className={styles.btn_container}>
              <Link href="/#contact-form" passHref>
                <PrimaryButton>Let&apos;s Collaborate</PrimaryButton>
              </Link>

              <Link
                passHref
                href="https://api.whatsapp.com/send?phone=03412682080&data=AWChgJKccET8azlQmrIfAyrt3-C-tSqxtdbBeiGuYTIks80X9COd6qE0-nVdEgdULCHR1FXv6AY5IV8vYxZCiTrff5WcxILJMepsRv8xuKs4GmNxZ_kDA6jdoXtk7KfK7RVFqP-wd3uWzhohdKbAmO6aPPtAEd-TaJu5hdaCcz9IQyIOApl0FBjZj2qNk3JHhKja9oU0r0VKGPoZyr1HftDAGoc2oOgS42rFg7NfhrmPWIJNvXeT7O7YoVqpqW2h9qAjRfHia3wjoxczpyxuL8SpID3iQR6RqU0MVxVLkwvtKNPNlUziJbthcxEG-Urt2s8"
              >
                <SecondaryButton>Connect on Whatsapp</SecondaryButton>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
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
