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
        "https://twitter.com/hamza17324433",
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
        "https://api.whatsapp.com/send?phone=03412682080&data=AWChgJKccET8azlQmrIfAyrt3-C-tSqxtdbBeiGuYTIks80X9COd6qE0-nVdEgdULCHR1FXv6AY5IV8vYxZCiTrff5WcxILJMepsRv8xuKs4GmNxZ_kDA6jdoXtk7KfK7RVFqP-wd3uWzhohdKbAmO6aPPtAEd-TaJu5hdaCcz9IQyIOApl0FBjZj2qNk3JHhKja9oU0r0VKGPoZyr1HftDAGoc2oOgS42rFg7NfhrmPWIJNvXeT7O7YoVqpqW2h9qAjRfHia3wjoxczpyxuL8SpID3iQR6RqU0MVxVLkwvtKNPNlUziJbthcxEG-Urt2s8",
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
