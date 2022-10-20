import { Typography } from "@mui/material";
import React from "react";
import styles from "./navbar.module.scss";
import { PrimaryButton } from "../Button/Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_img_container}>
        <Image
          src="/images/nav_logo.png"
          alt="navbar logo"
          width={49}
          height={80}
          objectFit="contain"
        />
        <Typography variant="h5">Hamza Khan</Typography>
      </div>
      <div className={styles.navbar_links_container}>
        <Typography variant="body1">Home</Typography>
        <Typography variant="body1">About</Typography>
        <Typography variant="body1">Services</Typography>
        <Typography variant="body1">Portfolio</Typography>
        <Typography variant="body1">News</Typography>
        <PrimaryButton>Contact Me</PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
