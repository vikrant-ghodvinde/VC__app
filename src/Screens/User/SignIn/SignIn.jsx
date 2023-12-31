import FlexContainer from "Components/FlexContainer/FlexContainer";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const SignIn = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={true}>
        <div className="mb-5">Login</div>
        <form className="w-100">
          <Row className="w-100 flex-column gy-5">
            <Col md={12} lg={6} xl={4} className="mx-auto">
              <Row className="g-2 text-center">
                <Col xs={12}>
                  <div className={styles.formGroup}>
                    <label htmlFor="" className={styles.labelText}>
                      Email
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={styles.formGroup}>
                    <label htmlFor="" className={styles.labelText}>
                      Password
                    </label>
                    <input type="password" name="" id="" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={6} xl={4} className="mx-auto text-center">
              <Link to="" className="text-decoration-underline text-dark">
                Forgot Password
              </Link>
            </Col>
            <Col md={12} lg={6} xl={4} className="mx-auto text-center">
              <p className="m-0 text-grey">
                Don’t have an account?{" "}
                <Link to="" className="text-decoration-underline text-dark">
                  Sign up
                </Link>
              </p>
            </Col>
          </Row>
          <div className="footer_button-fix__without--width">
            <button className="btn btn-glow">Login</button>
          </div>
        </form>
      </FlexContainer>
    </div>
  );
};

export default SignIn;
