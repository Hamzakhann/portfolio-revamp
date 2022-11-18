import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./FindMeOn.module.scss";

const FindMeOn = () => {
  return (
    <div className={styles.find_me_container}>
      <h2>FIND ME ON</h2>
      <div className={styles.find_links_container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/fiverr.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/freelancer.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/upwork.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FindMeOn;
