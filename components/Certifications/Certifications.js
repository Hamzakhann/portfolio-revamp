import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "./Certifications.module.scss";
import Carousel from "react-elastic-carousel";

const Certifications = () => {
  let [certificates, setCertificates] = useState([
    {
      img1: "/Images/certificates_1.png",
      img2: "/Images/certificate_1.jpg",
    },
    {
      img1: "/Images/certificate_2.jpg",
      img2: "/Images/certificate_3.jpg",
    },
    {
      img1: "/Images/certificate_4.jpg",
      img2: "/Images/certificate_5.jpg",
    },
    {
      img1: "/Images/certificate_6.jpeg",
      img2: "/Images/certificate_7.jpg",
    },
    {
      img1: "/Images/certificate_8.jpeg",
      img2: "/Images/certificate_9.jpeg",
    },
  ]);

  return (
    <div
      className={`${styles.certifications_container} certifications_container`}
    >
      <h2>Certifications</h2>
      <div className={`${styles.slider_container} mobile_none`}>
        <Carousel showArrows={false}>
          {certificates?.map((item, i) => (
            <div className={styles.slide} key={i}>
              <Image
                src={item?.img1}
                alt="certificates"
                width={700}
                height={548}
                objectFit="contain"
              />
              <Image
                src={item?.img2}
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
