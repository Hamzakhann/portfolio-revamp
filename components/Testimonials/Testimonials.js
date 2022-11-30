import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./Testimonials.module.scss";
import Carousel from "react-elastic-carousel";

const Testimonials = () => {
  let slideRef = useRef();
  let [testimonials, setTestimonials] = useState([
    {
      title: "Kevin Hatt",
      locations: "USA",
      description: `"Hamza delivered an outstanding work in the super short delay we had set. He is serious, super effective and really kind. You can trust him all the way.
      Thank you again Hamza, we will work with you again! ;)"`,
      img: "/Images/kevin.jpeg",
    },
    {
      title: "Majdolin",
      locations: "ISRAEL",
      description: `"Hamza professional experience helped me to solve a problem that I have stuck with for two weeks,He also helped solve other related problems,His communication level and skills are great! ,I without a doubt Will order again"`,
      img: "/Images/majdoline.jpeg",
    },
    {
      title: "Ryan kumar",
      locations: "USA",
      description: `"Hamza is a hard working, dedicated part of the team. He's talented within the front end domain and would recommend to others""`,
      img: "/Images/ryan.jpeg",
    },
    {
      title: "Bernard",
      locations: "USA",
      description: `"Hamza did a great job with understanding my needs. His skills in PWA development are superb. He did the requested updates in timely manner and gave me advice for future updates on my PWA. Will definitely use his services again."`,
      img: "/Images/bernard.jpeg",
    },
    {
      title: "Anthony",
      locations: "Australia",
      description: `"Hamza is an expert with MERN stacks. He works efficiently and finds issues that may arise before they happen and corrects them accordingly. It was a pleasure to work with him."`,
      img: "/Images/anthony.jpeg",
    },
    {
      title: "Jayanth",
      locations: "USA",
      description: `"Hamza is a fantastic developer! Did everything we asked for and more. Didn't require a lot of instruction, was able to understand our requirements and did a great job. Really happy with the work so far. Will definitely rehire."`,
      img: "/Images/jayanth.jpeg",
    },
    {
      title: "Rotem Dofni",
      locations: "ISRAEL",
      description: `"Hamza did a great job working on our reporting module.
      He was very responsive, cooperative, and finished tasks on time and professionally."`,
      img: "/Images/rotem.jpeg",
    },
    {
      title: "Don Bandy",
      locations: "USA",
      description: `"Hamza and I developed a great friendship on this project and I enjoyed working him. He was always willing to jump in and help at any time. Really awesome person to have on the team. Thank you for everything you’ve done Hamza."`,
      img: "/Images/don.jpeg",
    },
  ]);

  const slideGoto = (val, time) =>
    setTimeout(() => slideRef?.current?.goTo(val), time);
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
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Carousel
            ref={slideRef}
            showArrows={false}
            enableAutoPlay={true}
            onChange={(e) =>
              e?.index === testimonials?.length - 1 && slideGoto(0, 200)
            }
          >
            {testimonials?.map((item, i) => (
              <div className={styles.testimonials_content_container} key={i}>
                <div className={styles.testi_img_container}>
                  <Image
                    src={item?.img}
                    alt="logo"
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
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
