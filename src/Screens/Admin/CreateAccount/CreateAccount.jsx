import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const CreateAccount = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-4 fs-6">Create an Account</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="g-2">
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Name of the Fund<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
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
                  <input type="email" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Phone<span>*</span>
                  </label>
                  <input type="number" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Password<span>*</span>
                  </label>
                  <input type="password" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Re-Password<span>*</span>
                  </label>
                  <input type="password" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
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
          <Link to="/" className="btn">
            LOGIN
          </Link>
          <button type="button" className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
    </div>
  );
};

export default CreateAccount;
