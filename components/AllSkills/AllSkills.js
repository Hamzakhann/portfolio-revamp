import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./AllSkills.module.scss";

const AllSkills = () => {
  return (
    <div className={styles.all_skills_container}>
      <div className={styles.all_skills_content_container}>
        <div className={styles.all_skills}>
          <Image
            src="/Images/react.png"
            alt="react js logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/next.png"
            alt="next js logo"
            width={150}
            height={90}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/gatsby.png"
            alt="gatsby js logo"
            width={200}
            height={52}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/firebase.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/typescript.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/html5.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/javascript.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/python.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/apollo.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/graphql.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/mongodb.webp"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/docker.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/aws.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/web3.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/mysql.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/nodejs.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
        <div className={styles.all_skills}>
          <Image
            src="/Images/css3.png"
            alt="firebase js logo"
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
