import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const Register = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false}>
        <div className="mb-5">Create an Account</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="g-2">
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    First Name<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Last Name<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Email<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Password<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Re-Password<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12} className="mt-5">
                <Form.Check
                  type="checkbox"
                  id=""
                  label="I agree to Terms & Conditions"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/login" className="btn link">
            BACK
          </Link>
          <Link to="/" className="btn btn-glow">
            NEXT
          </Link>
        </div>
      </FlexContainer>
    </div>
  );
};

export default Register;
