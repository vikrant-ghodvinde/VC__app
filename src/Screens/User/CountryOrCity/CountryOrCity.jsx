import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const CountryOrCity = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false}>
        <Row className="w-100 mb-5">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="gy-5">
              <Col xs={12}>
                <div className="mb-4 text-center">Were are you based?</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="">
                    <option value="">Country</option>
                  </select>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-4 text-center">State</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="">
                    <option value="">State</option>
                  </select>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-4 text-center">City</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="">
                    <option value="">City</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/register" className="btn link">
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

export default CountryOrCity;
