import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "Styles/FormControl.module.css";

const ForgetPassword = () => {
  const [passwordSent, setPasswordSent] = useState(false);

  const handleClick = () => {
    setPasswordSent(true);
  };
  return (
    <div className="page__wrapper d-flex align-items-center justify-content-center">
      <div className="w-100 text-center">
        <div className="mb-5 fs-5">{!passwordSent ? "Forgot Password?" : "Check your email"}</div>
        <div className="mb-5">
          {!passwordSent ? "No worries we’ll send you reset instruction. " : "We have send password rest link!"}
        </div>
        {!passwordSent && (
          <Row className="w-100">
            <Col md={12} lg={6} xl={4} className="mx-auto">
              <Row className="gy-5">
                <Col xs={12}>
                  <div className={`${styles.formGroup} text-center`}>
                    <label htmlFor="" className="mb-2">
                      Email<span>*</span>
                    </label>
                    <input type="email" name="" id="" />
                  </div>
                </Col>
                <Col xs={12}>
                  <button className="btn btn-glow" onClick={handleClick}>
                    Reset Password
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
