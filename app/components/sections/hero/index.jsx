import React from "react";
import styles from "./hero.module.scss";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div className={styles.hero_wrapper}>
      <Container fluid="xl">
        <Row>
          <Col lg={5}>
            <div className={styles.hero_content}>
              <h1>
                KRATOM
                <span>FOR SALE</span>
              </h1>
              <hr />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
              <Button className={`default-btn green-btn ${styles.hero_btn}`}>
                Shop Now
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.hero_img}>
              <Image src="assets/images/hero-img.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
