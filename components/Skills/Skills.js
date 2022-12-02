import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { PrimaryButton } from "../Button/Button";
import styles from "./Skills.module.scss";

const Skills = () => {
  let [tabs, setTabs] = useState(1);

  const changeTab = (val) => setTabs(val);

  return (
    <div className={styles.skills_container} id="services">
      <h2>Services</h2>
      <div className={styles.skills_tab_container}>
        <h4
          className={tabs === 1 ? styles.active : ""}
          onClick={() => changeTab(1)}
        >
          UI/UX Design
        </h4>
        <h4
          className={tabs === 2 ? styles.active : ""}
          onClick={() => changeTab(2)}
        >
          Web App Development
        </h4>
        <h4
          className={tabs === 3 ? styles.active : ""}
          onClick={() => changeTab(3)}
        >
          Mobile App Development
        </h4>
        <h4
          className={tabs === 4 ? styles.active : ""}
          onClick={() => changeTab(4)}
        >
          Blockchain
        </h4>
      </div>
      {tabs === 1 && (
        <div className={styles.skills_overview_container}>
          <div className={styles.skills_img_container}>
            <Image
              src="/Images/ui_ux.jpeg"
              alt="ui ux js logo"
              width={690}
              height={372}
              objectFit="contain"
            />
          </div>
          <div className={styles.line_container}></div>
          <div className={styles.skills_content_container}>
            <h3>UI/UX Design</h3>
            <p>
              When it comes to software programs or web solutions that appeal to
              every consumer segment, well-thought-out UI/UX designs are
              crucial. We at Weavers Web Solutions Private Limited deliver
              exceptional digital experiences that fit your company’s needs with
              the expectations of your customers. We deploy design systems,
              perform detailed design reviews, re-use the most efficient methods
              and tools, and mentor our designers on a regular basis. Our UI UX
              developers have designed amazing user experiences for anything
              from data-rich apps to e-commerce solutions.
            </p>
            {/* <div className={styles.btn_container}>
              <PrimaryButton>Let's Collaborate</PrimaryButton>
            </div> */}
          </div>
        </div>
      )}
      {tabs === 2 && (
        <div className={styles.skills_overview_container}>
          <div className={styles.skills_img_container}>
            <Image
              src="/Images/web_app.png"
              alt="react js logo"
              width={690}
              height={450}
              objectFit="contain"
            />
          </div>
          <div className={styles.line_container}></div>
          <div className={styles.skills_content_container}>
            <h3>Web App Development</h3>
            <p>
              When we execute a Web App Development project at Weavers Web
              Solutions Private Limited for you, you have a dedicated and
              skilled staff working for you 24*7. All of our procedures are
              customer-centric, with the goal of lowering company costs,
              addressing IT resourcing issues, and giving you a competitive
              advantage. We begin with a thorough examination of your needs and
              continue with post-launch support and updates. We deliver websites
              that fulfill all modern standards, including high speed, quick
              response time, logical and convenient navigation structure,
              user-friendly UX components, and eye-pleasing UI, by turning your
              brightest design ideas into code.
            </p>
            {/* <div className={styles.btn_container}>
              <PrimaryButton>Let's Collaborate</PrimaryButton>
            </div> */}
          </div>
        </div>
      )}
      {tabs === 3 && (
        <div className={styles.skills_overview_container}>
          <div className={styles.skills_img_container}>
            <Image
              src="/Images/mobile_app.png"
              alt="react js logo"
              width={690}
              height={450}
              objectFit="contain"
            />
          </div>
          <div className={styles.line_container}></div>
          <div className={styles.skills_content_container}>
            <h3>Mobile App Development</h3>
            <p>
              A mobile app is a must-have for every growing business. As a
              preferred mobile app development company with thousands of happy
              customers, we at Weavers Web Solutions Private Limited deliver
              mobile app development services that include end-to-end
              programming, business analysis, UI/UX thought process, testing,
              and online publishing of your mobile app. Our team of seasoned and
              extremely passionate professionals will provide you with complete
              mobile app development services- from conception to delivery, to
              continuing support.
            </p>
            {/* <div className={styles.btn_container}>
              <PrimaryButton>Let's Collaborate</PrimaryButton>
            </div> */}
          </div>
        </div>
      )}
      {tabs === 4 && (
        <div className={styles.skills_overview_container}>
          <div className={styles.skills_img_container}>
            <Image
              src="/Images/blockchain.jpeg"
              alt="blockchain logo"
              width={350}
              height={440}
              objectFit="contain"
            />
          </div>
          <div className={styles.line_container}></div>
          <div className={styles.skills_content_container}>
            <h3>Blockchain</h3>
            <p>
              Blockchain is transforming how people live and work around the
              world. We at Weavers Web Solutions Private Limited begin by
              gaining a thorough grasp of your goals, followed by a practical
              implementation of blockchain technology. We integrate alliances,
              partnerships, and leaders from every element of the blockchain
              ecosystem as the premier independent technological organization.
              Our blockchain consulting services help to design a scalable,
              enterprise-grade distributed system for business needs, based on a
              network architecture framework that increases operational agility
              and generates new revenue streams.
            </p>
            {/* <div className={styles.btn_container}>
              <PrimaryButton>Let's Collaborate</PrimaryButton>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
