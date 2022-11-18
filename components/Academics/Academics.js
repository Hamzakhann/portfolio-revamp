import React from "react";
import styles from "./Academics.module.scss";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const Academics = () => {
  return (
    <div className={styles.academics_container}>
      <Typography variant="h2">ACADEMICS</Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.academics_content}>
            <div className={styles.section}>
              <div>
                <Image
                  src="/Images/ilma.png"
                  width="60"
                  height="60"
                  objectFit="contain"
                  alt="ilma.png"
                />
              </div>
              <div>
                <Typography variant="h5">
                  ILMA University - Formerly IBT
                </Typography>
                <Typography variant="body1">BSCS, Computer Science</Typography>
                <small>2016 - 2020</small>
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <Image
                  src="/Images/hongkong.png"
                  width="60"
                  height="60"
                  objectFit="contain"
                  alt="hongkong.png"
                />
              </div>
              <div>
                <Typography variant="h5">
                  The Hong Kong University of Science and Technology
                </Typography>
                <Typography variant="body1">
                  Specializaion, Computer Software Engineering
                </Typography>
                <small>2018 - 2019</small>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.academics_content}>
            <div className={styles.section}>
              <div>
                <Image
                  src="/Images/aligarh.png"
                  width="60"
                  height="60"
                  objectFit="contain"
                  alt="aligarh.png"
                />
              </div>
              <div>
                <Typography variant="h5">
                  Aligarh institute of technology pakistan
                </Typography>
                <Typography variant="body1">
                  High School Diploma, Electrical and Electronics Engineering
                </Typography>
                <small>2011 - 2014</small>
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <Image
                  src="/Images/shaheen.png"
                  width="60"
                  height="60"
                  objectFit="contain"
                  alt="shaheen.png"
                />
              </div>
              <div>
                <Typography variant="h5">SHAHEEN PUBLIC SCHOOL</Typography>
                <Typography variant="body1">MATRICULATION</Typography>
                <small>2009 - 2010</small>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Academics;
