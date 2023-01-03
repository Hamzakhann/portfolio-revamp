import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { SecondaryButton } from "../Button/Button";
import Input from "../Tags/Input/Input";
import Textarea from "../Tags/Textarea/Textarea";
import validator from "validator";
import styles from "./GetInTouch.module.scss";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [clientErr, setClientErr] = useState({});

  const validatingBody = (body) => {
    let isErr = false;
    let errors = {};
    if (!validator.isEmail(body?.email)) {
      isErr = true;
      errors.email = "Email is invalid";
    } else {
      errors.email = "";
    }
    if (!body?.name) {
      isErr = true;
      errors.name = "Name is required";
    }
    if (!body?.number) {
      isErr = true;
      errors.number = "Number is required";
    }
    if (!body?.email) {
      isErr = true;
      errors.email = "Email is required";
    }
    if (!body?.message) {
      isErr = true;
      errors.message = "Message is required";
    }
    if (isErr) {
      setClientErr(errors);
    } else {
      setClientErr({});
      handleSubmitForm(body);
    }
  };

  const handleSubmitForm = async (body) => {
    setIsLoading(true);
    try {
      let api = `https://formspree.io/f`;
      let response = await axios.post(`${api}/xwkyyzar`, body);
      let { ok } = response?.data;
      setIsLoading(false);
      alert(ok ? "Successfully Submit" : "Something went wrong");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.get_in_container} id="contact-form">
      <div className={styles.inner_container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <div className={styles.get_in_content_container}>
              <h2>Get in touch</h2>
              <p>
                <b>ADDRESS:</b> A-17 ROW-2, BlOCk 10-A, GULSHAN-E-IQBAL, Karachi
                75290
              </p>
              <p>
                <b>Ph#:</b> +92331-2524490
              </p>
              <p>
                <b>Email:</b> hamzakhann66@gmail.com
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className={styles.get_in_form_container}>
              {/* <h5>
                Thank you for contacting me for your next project. Just fill in
                the form below with basic details and Our representative will
                get back to you shortly
              </h5> */}
              <Input
                inputType="outlined"
                type="text"
                placeholder="Your Name"
                value={formData?.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e?.target?.value })
                }
              />
              {clientErr?.name && (
                <p className={styles.danger}>{clientErr?.name}</p>
              )}
              <Input
                inputType="outlined"
                type="number"
                placeholder="Mobile Number"
                value={formData?.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e?.target?.value })
                }
                maxLength={10}
              />
              {clientErr?.number && (
                <p className={styles.danger}>{clientErr?.number}</p>
              )}
              <Input
                inputType="outlined"
                type="email"
                placeholder="Email Address"
                value={formData?.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e?.target?.value })
                }
              />
              {clientErr?.email && (
                <p className={styles.danger}>{clientErr?.email}</p>
              )}
              <Textarea
                inputType="outlined"
                placeholder="Write your message here"
                rows={8}
                value={formData?.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e?.target?.value })
                }
              />
              {clientErr?.message && (
                <p className={styles.danger}>{clientErr?.message}</p>
              )}
              <div className={styles.btn_container}>
                <SecondaryButton
                  type="outlined"
                  onClick={() => validatingBody(formData)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Send Message"}
                </SecondaryButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GetInTouch;
