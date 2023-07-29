import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const InvestInCountry = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 text-center">
          <p className="fs-6">Country You Invest in?*</p>
          <span className="fs-sm">You can select multiple!</span>
        </div>
        <Row className="w-100">
          <Col md={12} lg={10} className="mx-auto">
            <Row className="gy-3">
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="Global" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="India" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="USA" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="UK" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="New Zealand" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="Singapore" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="Malaysia" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="Australia" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn">
            Back
          </Link>
          <Link to='/admin-industry' type="button" className="btn btn-glow">
            NEXT
          </Link>
        </div>
      </FlexContainer>
    </div>
  );
};

export default InvestInCountry;
