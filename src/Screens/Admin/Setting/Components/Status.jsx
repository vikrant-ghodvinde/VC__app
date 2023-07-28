import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const Status = () => {
  return (
    <>
      <Row className="mb-5 gy-3">
        <Col xs={12}>
          <Form.Check type="checkbox" id="" label="Active" checked />
        </Col>
        <Col xs={12}>
          <Form.Check type="checkbox" id="" label="Deactivate" />
        </Col>
      </Row>

      <div>
        <p className={formStyle.labelText}>Type of fund</p>
        <Row className="gy-3">
          <Col xs={12}>
            <Form.Check type="checkbox" id="" label="Venture Capital" checked />
          </Col>
          <Col xs={12}>
            <Form.Check type="checkbox" id="" label="Angle Syndicate" />
          </Col>
          <Col xs={12}>
            <Form.Check
              type="checkbox"
              id=""
              label="Corporate Venture Capital"
            />
          </Col>
          <Col xs={12}>
            <Form.Check type="checkbox" id="" label="Fund Manager (Others)" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Status;
