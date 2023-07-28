import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const NotesEdit = () => {
  return (
    <Row className="gy-5">
      <Col md={12} lg={6} className="border-lg-end">
        <div className="py-0 py-lg-5">
          <Row>
            <Col md={12} lg={6}>
              <div>
                <p className="m-0">
                  information you want to communicate to the start-ups making
                  application to your Fund, for example, your fund focuses on
                  Fintech but is agnostic.
                </p>
              </div>
              <Row className="mt-3">
                <Col sm={12}>
                  <div className={formStyle.formGroup}>
                    <textarea name="" id=""></textarea>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={12} lg={6}>
        <div className="py-0 py-lg-5">
          <div className="mb-5">
            <label htmlFor="" className={formStyle.labelText}>
              Type in question you would like the start-up to answer with their
              application.
            </label>
          </div>
          <Row className="gy-4">
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label
                  htmlFor=""
                  className={`${formStyle.labelText} d-flex align-items-center gap-2`}
                >
                  Question 1
                  <button className="btn p-0">
                    <FeatherIcon icon="minus-square" color="#f00" size={16} />
                  </button>
                </label>
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label
                  htmlFor=""
                  className={`${formStyle.labelText} d-flex align-items-center gap-2`}
                >
                  Question 2
                  <button className="btn p-0">
                    <FeatherIcon icon="minus-square" color="#f00" size={16} />
                  </button>
                </label>
                <input type="text" name="" id="" />
              </div>
            </Col>
            <Col xs={12}>
              <div className={formStyle.formGroup}>
                <label
                  htmlFor=""
                  className={`${formStyle.labelText} d-flex align-items-center gap-2`}
                >
                  Question 3
                  <button className="btn p-0">
                    <FeatherIcon icon="minus-square" color="#f00" size={16} />
                  </button>
                </label>
                <input type="text" name="" id="" />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default NotesEdit;
