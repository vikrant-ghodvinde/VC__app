import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "Styles/FormControl.module.css";

const ResetPassword = () => {
  return (
    <div className="page__wrapper d-flex align-items-center justify-content-center">
      <div className="w-100 text-center">
        <div className="mb-5 fs-5">Set new password</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="gy-5">
              <Col xs={12}>
                <Row className="gy-3">
                  <Col xs={12}>
                    <div className={`${styles.formGroup} text-center`}>
                      <label htmlFor="" className="mb-2">
                        Password
                      </label>
                      <input type="email" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={`${styles.formGroup} text-center`}>
                      <label htmlFor="" className="mb-2">
                        Confirm Password
                      </label>
                      <input type="email" name="" id="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <button className="btn btn-glow">Reset Password</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
