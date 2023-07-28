import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const Profile = () => {
  return (
    <>
      <Row>
        <Col md={12} lg={6}>
          <Row className="gy-4">
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Account Email
                </label>
                <p className="m-0">Tushar.patel@whatever.com</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Name of the Fund
                </label>
                <p className="m-0">Tushar.patel@whatever.com</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Present password
                </label>
                <p className="m-0">********************</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
