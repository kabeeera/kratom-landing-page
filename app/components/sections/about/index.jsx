import React from "react";
import styles from "./about.module.scss";
import { Col, Container, Row, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid="xl">
      <div className={styles.about_wrapper}>
        <div className={styles.about_title}>
          <h6>About</h6>
          <h2>KRATOM GALA</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className={styles.about_des}>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button className={`default-btn green-btn ${styles.about_btn}`}>
            Discover More
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
