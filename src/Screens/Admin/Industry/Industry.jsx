import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Industry = () => {
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 text-center">
          <p className="fs-6">Industry</p>
        </div>
        <Row className="w-100">
          <Col md={12} lg={10} className="mx-auto">
            <Row className="gy-3">
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="FinTech" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="EdTech" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="List item" />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check type="checkbox" id="" label="Food Delivery" />
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
          <Link to='/admin' type="button" className="btn btn-glow">
            NEXT
          </Link>
        </div>
      </FlexContainer>
    </div>
  );
};

export default Industry;
