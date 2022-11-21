import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import Carousel from "react-elastic-carousel";

const Testimonials = () => {
  let [testimonials, setTestimonials] = useState([
    {
      title: "Matt Devlin",
      locations: "USA",
      description: `"One of the toughest struggles as a business owner is
      finding qualified new opportunities. If you looking for a
      team that cares for your business as much as you do, then
      these are the guys. From website development all the way to
      running effective ads, they know everything it takes to
      launch successful campaigns. I am very thankful to have this
      team in my corner and will continue to depend on them for
      all our future SEO and advertising efforts."`,
      img: "/Images/testimonials_5.jpg",
    },
    {
      title: "Matt Devlin",
      locations: "USA",
      description: `"One of the toughest struggles as a business owner is
      finding qualified new opportunities. If you looking for a
      team that cares for your business as much as you do, then
      these are the guys. From website development all the way to
      running effective ads, they know everything it takes to
      launch successful campaigns. I am very thankful to have this
      team in my corner and will continue to depend on them for
      all our future SEO and advertising efforts."`,
      img: "/Images/testimonials_5.jpg",
    },
    {
      title: "Matt Devlin",
      locations: "USA",
      description: `"One of the toughest struggles as a business owner is
      finding qualified new opportunities. If you looking for a
      team that cares for your business as much as you do, then
      these are the guys. From website development all the way to
      running effective ads, they know everything it takes to
      launch successful campaigns. I am very thankful to have this
      team in my corner and will continue to depend on them for
      all our future SEO and advertising efforts."`,
      img: "/Images/testimonials_5.jpg",
    },
  ]);

  return (
    <div className={`${styles.testimonials_container} testimonials_container`}>
      <h2>Testimonials</h2>

      <Grid container spacing={5}>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.testimonials_img_container}>
            <Image
              src="/Images/testimonials_new_1.png"
              alt="testimonials images"
              width={700}
              height={671}
              objecc="contain"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Carousel showArrows={false}>
            {testimonials?.map((item, i) => (
              <div className={styles.testimonials_content_container} key={i}>
                <Image
                  src={item?.img}
                  alt="logo"
                  width={200}
                  height={200}
                  objectFit="contain"
                />
                <h3>{item?.title}</h3>
                <h4>{item?.locations}</h4>
                <p>{item?.description}</p>
              </div>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;
