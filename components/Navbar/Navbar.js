import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { PrimaryButton } from "../Button/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  let router = useRouter();
  const handleLinkActive = (val) => {
    // let { asPath } = router;
    // let measureVal = asPath?.split("/")[1];
    // console.log(measureVal === `#${val}`);
    // if (measureVal === `#${val}`) return styles.active_link;
    // return;
    if (val === "/") return styles.active_link;
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_img_container}>
        <Image
          src="/Images/logo.png"
          alt="navbar logo"
          width={181}
          height={80}
          objectFit="contain"
        />
      </div>
      <div className={styles.navbar_links_container}>
        <a href="#home">
          <Typography variant="body1" className={handleLinkActive("/")}>
            Home
          </Typography>
        </a>
        <a href="#about">
          <Typography variant="body1" className={handleLinkActive("about")}>
            About
          </Typography>
        </a>
        <a href="#services">
          <Typography variant="body1" className={handleLinkActive("services")}>
            Services
          </Typography>
        </a>
        <a href="#portfolio">
          <Typography variant="body1" className={handleLinkActive("portfolio")}>
            Portfolio
          </Typography>
        </a>
        <PrimaryButton>Contact Me</PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
