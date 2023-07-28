import React from "react";
import styles from "./style/FlexContainer.module.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const FlexContainer = ({ title, menus, homeButton, children }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.firstContent}>
        <h2>{title} 👋🏼</h2>
      </div>
      <div className={styles.secondContent}>
        <div className={styles.topSection}>{children}</div>
        {menus && (
          <div className={styles.bottomSection}>
            <Row>
              <Col md={12} lg={8} className="ms-auto">
                <div className={styles.bottomContentWrapper}>
                  <ul className={styles.menus}>
                    <li>
                      <Link to="/">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                  {homeButton && (
                    <Link to="/" className="btn btn-dark">
                      Home
                    </Link>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexContainer;
