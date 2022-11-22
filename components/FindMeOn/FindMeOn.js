import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./FindMeOn.module.scss";

const FindMeOn = () => {
  const redirectByATag = (link, children) => (
    <a href={link} target="_blank">
      {children}
    </a>
  );
  return (
    <div className={styles.find_me_container}>
      <h2>FIND ME ON</h2>
      <div className={styles.find_links_container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              {redirectByATag(
                "https://www.upwork.com/freelancers/~013cc8fc4b38ab9cb2",
                <Image
                  src="/Images/fiverr.png"
                  alt="upwork image"
                  width={300}
                  height={90}
                  objectFit="contain"
                />
              )}
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              {redirectByATag(
                "https://www.fiverr.com/gottlich_return",
                <Image
                  src="/Images/freelancer.png"
                  alt="upwork image"
                  width={300}
                  height={90}
                  objectFit="contain"
                />
              )}
            </div>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <div className={styles.find}>
              {redirectByATag(
                "https://www.freelancer.com/u/mhamzakhann66",
                <Image
                  src="/Images/upwork.png"
                  alt="upwork image"
                  width={300}
                  height={90}
                  objectFit="contain"
                />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FindMeOn;
