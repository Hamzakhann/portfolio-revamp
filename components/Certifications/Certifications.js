import Image from "next/image";
import React, { Fragment } from "react";
import styles from "./Certifications.module.scss";
import Carousel from "react-elastic-carousel";

const Certifications = () => {
  return (
    <div
      className={`${styles.certifications_container} certifications_container`}
    >
      <h2>Certifications</h2>
      <div className={`${styles.slider_container} mobile_none`}>
        <Carousel showArrows={false}>
          {Array(2)
            .fill()
            .map((item, i) => (
              <div className={styles.slide} key={i}>
                <Image
                  key={i}
                  src="/Images/certificates_1.png"
                  alt="certificates"
                  width={700}
                  height={548}
                  objectFit="contain"
                />
                <Image
                  key={i}
                  src="/Images/certificates_1.png"
                  alt="certificates"
                  width={700}
                  height={548}
                  objectFit="contain"
                />
              </div>
            ))}
        </Carousel>
      </div>
      <div className={`${styles.slider_container} desktop_none`}>
        <Carousel showArrows={false}>
          {Array(2)
            .fill()
            .map((item, i) => (
              <div className={styles.slide} key={i}>
                <Image
                  key={i}
                  src="/Images/certificates_1.png"
                  alt="certificates"
                  width={700}
                  height={548}
                  objectFit="contain"
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Certifications;
