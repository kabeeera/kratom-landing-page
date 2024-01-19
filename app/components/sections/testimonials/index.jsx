"use client";
import React, { useRef } from "react";
import styles from "./testmonials.module.scss";
import { Container, Image } from "react-bootstrap";
import Heading from "../../heading";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const test = [
    {
      name: "Anderson Jam",
      avatar: "assets/images/avatar.png",
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      name: "Anderson Jam",
      avatar: "assets/images/avatar.png",
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
  ];

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div className={styles.testimonials_wrapper}>
      <Container fluid="xl position-relative">
        <Image src="assets/images/commas.png" />
        <Heading>
          <h2>
            Our Happy <span>Clients</span>
          </h2>
        </Heading>
        <div className={styles.testimonials_inner_wrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            loop
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {test.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.single_testimonial} key={index}>
                    <p>{item.message}</p>
                    <Image src={item.avatar} />
                    <h3>{item.name}</h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={styles.nextNav} ref={navigationNextRef}>
            <Image src="/assets/images/test-right-arrow.png" />
          </div>
          <div className={styles.prevNav} ref={navigationPrevRef}>
            <Image src="/assets/images/test-left-arrow.png" />
          </div>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
