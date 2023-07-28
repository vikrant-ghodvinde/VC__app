import React from "react";
import Styles from "./StatusBar.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const StatusBar = ({ title, linkBack, linkNext }) => {
  return (
    <div className={Styles.statusBar}>
      <Container fluid className="px-5">
        <div className={Styles.nav}>
          <div className={Styles.pageTitle}>{title}</div>
          <div className={Styles.links__wrapper}>
            {linkBack && (
              <div className={Styles.backButton}>
                <Link to={linkBack}>
                  <FeatherIcon
                    icon="arrow-left"
                    size={20}
                    color="rgba(249, 65, 68, 1)"
                  />
                  Back
                </Link>
              </div>
            )}
            {linkNext && (
              <div className={Styles.backButton}>
                <Link to={linkNext}>
                  Next
                  <FeatherIcon
                    icon="arrow-right"
                    size={20}
                    color="rgba(249, 65, 68, 1)"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StatusBar;
