import React from "react";
import styles from "./Experience.module.scss";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const Experience = () => {
  const experienceArr = [
    {
      img: "/Images/ar.png",
      title: "FULL STACK ENGINEER",
      company: "ARCHITECTED RELATIONS",
      date: "2021 - 2022",
      description:
        "Working as a software development associate and developing amazing products for clients throughout the world.",
    },
    {
      img: "/Images/soprano.svg",
      title: "FRONTEND DEVELOPER",
      company: "SOPRANO.AI",
      date: "2019 - 2020",
      description:
        "Working as a frontend engineer and developing amazing application for clients maintain the UI UX of production application",
    },
    {
      img: "/Images/rightbond.svg",
      title: "FRONTEND  ENGINEER",
      company: "RIGHTBOUND",
      date: "2019 - 2020",
      description:
        "Responsible for developing, designing, modeling and documenting the software solutions. Ability to develop enterprise level solutions from scratch with direct communication with client.",
    },
    {
      img: "/Images/valohai.svg",
      title: "FRONTEND  ENGINEER",
      company: "VALOHAI",
      date: "2017 - 2018",
      description:
        "Responsible for developing clean, readable & maintainable solutions. Mostly work on JavaScript technologies like ReactJS",
    },
    {
      img: "/Images/minto.svg",
      title: "FULL STACK DEVELOPER",
      company: "MINTDROPZ",
      date: "2020 - 2021",
      description:
        "Build full stack applications for both web and mobile.Deliver clean, readable and efficient solutions following the best practices and standards.",
    },
    {
      img: "/Images/ruvivo.svg",
      title: "SOFTWARE DEVELOPER",
      company: "RUVIVO.AI",
      date: "2018 - 2019",
      description:
        "Write and test code, refining and rewriting it as necessary, and communicate with any programmers involved in the project. Research, design and write new web and mobile software",
    },
    {
      img: "/Images/holon.svg",
      title: "FRONTEND DEVELOPER",
      company: "HOLON-IQ",
      date: "2018 - 2019",
      description:
        "Working on tables charts data modelling and APIs integration creating pages with latest frontend technology",
    },
    {
      img: "/Images/panacloud.svg",
      title: "Internee",
      company: "Panacloud Pvt Ltd",
      date: "2018 - 2017",
      description:
        "Selected as a bootcamper after passing some axams and start learning latest technologies like Docker Kubernetes AWS Ansible CI CD ",
    },
  ];

  return (
    <div className={styles.experience_container}>
      <div className={styles.experience_content}>
        <Typography variant="h2">EXPERIENCE</Typography>
        <Grid container spacing={8}>
          {experienceArr.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className={styles.grid_item_container}
            >
              <div className={styles.contents}>
                <div className={styles.section_1}>
                  <div>
                    <Image
                      src={item.img}
                      width="80"
                      height="80"
                      objectFit="contain"
                      alt="ilma.png"
                    />
                  </div>
                  <div>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.company}</Typography>
                    <small>{item.date}</small>
                  </div>
                </div>
                <div className={styles.section_2}>
                  <Typography variant="body1">{item.description}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Experience;
