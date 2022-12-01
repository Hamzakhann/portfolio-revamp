import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { PrimaryButton } from "../Button/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState("");

  let router = useRouter();

  const handleLinkActive = (val) => val === isNavActive && styles.active_link;
  useEffect(() => setIsNavActive(localStorage.getItem("activeLink")), []);
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
        <a
          href="#home"
          onClick={() => {
            localStorage.setItem("activeLink", "#home");
            setIsNavActive("#home");
          }}
        >
          <Typography variant="body1" className={handleLinkActive("#home")}>
            Home
          </Typography>
        </a>
        <a
          href="#about"
          onClick={() => {
            localStorage.setItem("activeLink", "#about");
            setIsNavActive("#about");
          }}
        >
          <Typography variant="body1" className={handleLinkActive("#about")}>
            About
          </Typography>
        </a>
        <a
          href="#services"
          onClick={() => {
            localStorage.setItem("activeLink", "#services");
            setIsNavActive("#services");
          }}
        >
          <Typography variant="body1" className={handleLinkActive("#services")}>
            Services
          </Typography>
        </a>
        <a
          href="#portfolio"
          onClick={() => {
            localStorage.setItem("activeLink", "#portfolio");
            setIsNavActive("#portfolio");
          }}
        >
          <Typography
            variant="body1"
            className={handleLinkActive("#portfolio")}
          >
            Portfolio
          </Typography>
        </a>
        <PrimaryButton>Contact Me</PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
