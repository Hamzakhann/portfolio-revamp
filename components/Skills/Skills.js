import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Button/Button";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills_container}>
      <h2>Skills</h2>
      <div className={styles.skills_tab_container}>
        <h4 className={styles.active}>Frontend</h4>
        <h4>Backend</h4>
        <h4>Other</h4>
      </div>
      <div className={styles.skills_overview_container}>
        <div className={styles.skills_img_container}>
          <Image
            src="/Images/react.png"
            alt="react js logo"
            width={100}
            height={100}
            objectFit="contain"
          />
          <Image
            src="/Images/next.png"
            alt="next js logo"
            width={150}
            height={90}
            objectFit="contain"
          />
          <Image
            src="/Images/gatsby.png"
            alt="gatsby js logo"
            width={200}
            height={52}
            objectFit="contain"
          />
          <Image
            src="/Images/firebase.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.line_container}></div>
        <div className={styles.skills_content_container}>
          <p>
            Because we are a highly skilled team of creative geniuses who are
            passionate about their work and our developers are expert
            professionals in a range of new and existing platforms. We can
            design web, desktop, and mobile applications using any technology.{" "}
          </p>
          <p>
            Because we are a highly skilled team of creative geniuses who are
            passionate about their work and our developers are expert
            professionals in a range of new and existing platforms. We can
            design web, desktop, and mobile applications using any technology.{" "}
          </p>
          <div className={styles.btn_container}>
            <PrimaryButton>Let's Collaborate</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
