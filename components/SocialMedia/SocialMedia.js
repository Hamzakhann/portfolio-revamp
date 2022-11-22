import Image from "next/image";
import React from "react";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  const redirectByATag = (link, children) => (
    <a href={link} target="_blank">
      {children}
    </a>
  );

  return (
    <div className={styles.social_media_container}>
      {redirectByATag(
        "https://twitter.com/",
        <Image
          src="/Images/twitter.png"
          alt="social media images"
          width={360}
          height={250}
          objectFit="contain"
        />
      )}
      {redirectByATag(
        "https://github.com/hamzakhann",
        <Image
          src="/Images/github.png"
          alt="social media images"
          width={360}
          height={250}
          objectFit="contain"
        />
      )}
      {redirectByATag(
        "https://www.linkedin.com/in/m-hamza-khan-a10470128/",
        <Image
          src="/Images/linkedin.png"
          alt="social media images"
          width={360}
          height={250}
          objectFit="contain"
        />
      )}
      {redirectByATag(
        "",
        <Image
          src="/Images/whatsapp.png"
          alt="social media images"
          width={360}
          height={250}
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default SocialMedia;
