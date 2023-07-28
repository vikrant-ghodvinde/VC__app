import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Country = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mb-5">
        <button className="btn p-2 border-0">
          <FeatherIcon icon="edit" size={18} />
        </button>
        <button className="btn p-2 border-0">
          <FeatherIcon icon="save" size={18} />
        </button>
      </div>
      <Row className="gy-3">
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
        <Col md={6} lg={4} xl={3}>
          <Form.Check type="checkbox" id="" label="Global" />
        </Col>
      </Row>
    </>
  );
};

export default Country;
