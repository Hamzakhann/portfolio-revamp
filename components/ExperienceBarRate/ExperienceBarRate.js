import { Grid } from "@mui/material";
import React from "react";
import styles from "./ExperienceBarRate.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const viewRef = useInView();

  return (
    <div className={styles.experience_container} ref={viewRef?.ref}>
      <div className={styles.experience_content_container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className={styles.experience}>
              <h1>{viewRef?.inView && <CountUp end={4} />}+</h1>
              <h5>years of experience</h5>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.experience}>
              <h1> {viewRef?.inView && <CountUp end={100} />}+</h1>
              <h5>projects completed</h5>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={styles.experience}>
              <h1> {viewRef?.inView && <CountUp end={50} />}+</h1>
              <h5>satisfied clients</h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Experience;
