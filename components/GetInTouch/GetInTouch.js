import { Grid } from "@mui/material";
import React from "react";
import { SecondaryButton } from "../Button/Button";
import Input from "../Tags/Input/Input";
import Textarea from "../Tags/Textarea/Textarea";
import styles from "./GetInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div className={styles.get_in_container}>
      <div className={styles.inner_container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.get_in_content_container}>
              <h2>Get in touch with us.</h2>
              <h3>Head Office</h3>
              <p>
                Adventz Infinity@5, Office Number: 1006, 10th Floor, 18 BN
                Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
              </p>
              <p>+91 033 4000 4749</p>
              <p>info@weavers-web.com</p>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className={styles.get_in_form_container}>
              <h5>
                Thank you for contacting me for your next project. Just fill in
                the form below with basic details and Our representative will
                get back to you shortly
              </h5>
              <Input inputType="outlined" type="text" placeholder="Your Name" />
              <Input
                inputType="outlined"
                type="number"
                placeholder="Mobile Number"
              />
              <Input
                inputType="outlined"
                type="email"
                placeholder="Email Address"
              />
              <Textarea
                inputType="outlined"
                placeholder="Write your message here"
                rows={8}
              />
              <div className={styles.btn_container}>
                <SecondaryButton type="outlined">Send Message</SecondaryButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GetInTouch;
