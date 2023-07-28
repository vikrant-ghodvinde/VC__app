import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TypeOfFund = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 fs-6">Type of Fund</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="gy-3">
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Venture Capital"
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Angle Syndicate"
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Corporate Venture Capital"
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Fund Manager (Others)"
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id=""
                  label="Fund Manager (Others)"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn">
            Back
          </Link>
          <button type="button" className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
    </div>
  );
};

export default TypeOfFund;
