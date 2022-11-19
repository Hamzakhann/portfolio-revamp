import Image from "next/image";
import React from "react";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.social_media_container}>
      <Image
        src="/Images/twitter.png"
        alt="social media images"
        width={360}
        height={250}
        objectFit="contain"
      />
      <Image
        src="/Images/github.png"
        alt="social media images"
        width={360}
        height={250}
        objectFit="contain"
      />
      <Image
        src="/Images/linkedin.png"
        alt="social media images"
        width={360}
        height={250}
        objectFit="contain"
      />
      <Image
        src="/Images/whatsapp.png"
        alt="social media images"
        width={360}
        height={250}
        objectFit="contain"
      />
    </div>
  );
};

export default SocialMedia;
