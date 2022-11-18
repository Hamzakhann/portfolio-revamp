import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./HowWork.module.scss";

const HowWork = () => {
  return (
    <div className={styles.find_me_container}>
      <h2>HOW I WORK</h2>
      <div className={styles.find_links_container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/how_work_2.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
              <h4>Go Hourly</h4>
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/how_work_3.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
              <h4>
                Committed <br /> Development
              </h4>
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              <Image
                src="/Images/how_work_1.png"
                alt="upwork image"
                width={300}
                height={90}
                objectFit="contain"
              />
              <h4>Fixed Price</h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowWork;
