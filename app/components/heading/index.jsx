"use client";

import React from "react";
import styles from "./heading.module.scss";

const Heading = ({ children, className }) => {
  return <div className={`${className} ${styles.heading}`}>{children}</div>;
};

export default Heading;
