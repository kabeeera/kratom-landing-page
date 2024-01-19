"use client";

import React, { useRef } from "react";
import { Container, Image } from "react-bootstrap";
import Heading from "../../heading";
import styles from "./categories.module.scss";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Category from "../../cards/category";

const Categories = () => {
  const categories = [
    {
      title: "Liquid",
      icon: "/assets/images/cat1.png",
    },
    {
      title: "Capsules",
      icon: "/assets/images/cat2.png",
    },
    {
      title: "Powder",
      icon: "/assets/images/cat1.png",
    },
    {
      title: "Tablets",
      icon: "/assets/images/cat2.png",
    },
    {
      title: "Liquid",
      icon: "/assets/images/cat1.png",
    },
    {
      title: "Capsules",
      icon: "/assets/images/cat2.png",
    },
  ];

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div className={styles.categories_wrapper}>
      <Container fluid="xl">
        <Heading>
          <h2>
            Kratom Extract <span>Categories</span>
          </h2>
        </Heading>
        <div className={styles.categories_slider}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
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
            {categories.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Category title={item.title} icon={item.icon} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className={styles.nextNav} ref={navigationNextRef}>
            <Image src="/assets/images/right-arrow.png" />
          </div>
          <div className={styles.prevNav} ref={navigationPrevRef}>
            <Image src="/assets/images/left-arrow.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
