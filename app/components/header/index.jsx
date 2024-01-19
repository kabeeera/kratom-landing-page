"use client";

import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "./header.module.scss";
import SearchProducts from "./search-products";
import Link from "next/link";

const Header = () => {
  const productNav = [
    {
      title: "Kratom Powders",
      route: "#",
    },
    {
      title: "Kratom Capsules",
      route: "#",
    },
    {
      title: "Liquid Kratom",
      route: "#",
    },
    {
      title: "Kratom Extracts",
      route: "#",
    },
    {
      title: "Brands",
      route: "#",
    },
  ];

  const siteNav = [
    {
      title: "About Us",
      route: "#",
    },
    {
      title: "Contact Us",
      route: "#",
    },
    {
      title: "Blog",
      route: "#",
    },
  ];
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.top_bar}>
        <Container fluid="xl">
          <p>FREE SHIPPING when you order $75 or more!</p>
        </Container>
      </div>
      <div className={styles.header_inner}>
        <Container fluid="xl">
          <div className={styles.middle_bar}>
            <div className={styles.logo}>
              <Image src="assets/images/logo.png" />
            </div>
            <div className={styles.search_action_wrapper}>
              <SearchProducts />
              <div className={styles.cart}>
                <Image src="assets/images/bag.png" />
                <span>2</span>
              </div>
              <div className={styles.account}>
                <Image src="assets/images/account.png" />
              </div>
            </div>
          </div>
          <div className={styles.bottom_bar}>
            <ul className={styles.product_nav}>
              {productNav.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.route}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.site_nav}>
              {siteNav.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.route}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
