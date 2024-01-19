import React from "react";
import { Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from "./search-products.module.scss";
const SearchProducts = () => {
  return (
    <div className={styles.search_product_wrapper}>
      <Form.Control
        placeholder="Search Products"
        type="text"
        className={styles.search_input}
      />

      <Button className={`default-btn green-btn ${styles.search_btn}`}>
        <Image src="assets/images/search.png" />
        Search
      </Button>
    </div>
  );
};

export default SearchProducts;
