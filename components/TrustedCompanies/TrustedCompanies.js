import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./TrustedCompanies.module.scss";
import Marquee from "react-fast-marquee";

const TrustedCompanies = () => {
  const trustedImages = [
    "/Images/trusted_1.png",
    "/Images/minto.png",
    "/Images/ar.png",
    "/Images/pana_cloud.png",
    "/Images/ruvivo.png",
    "/Images/soprano.png",
    "/Images/damedesh.png",
    "/Images/sunny_leone.png",
    "/Images/right_bound.png",
    "/Images/valoha.png",
  ];
  return (
    <div className={styles.trusted_companies_container}>
      <h2>TRUSTED BY COMPANIES</h2>
      <div className={styles.trusted_content_container}>
        <Marquee
          gradientColor={[]}
          className={styles.marquee_container}
          speed={100}
        >
          {trustedImages.map((item, i) => (
            // <div className={styles.trusted_logos}>
            <div key={i}>
              <Image
                src={item}
                alt="Trusted Companies Logo"
                width={90}
                height={90}
                objectFit="contain"
                key={i}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedCompanies;
