import React from "react";
import styles from "./category.module.scss";
import { Image } from "react-bootstrap";

const Category = ({ title, icon }) => {
  return (
    <div className={styles.category_wrapper}>
      <Image src={icon} />
      <h6>Extract</h6>
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
