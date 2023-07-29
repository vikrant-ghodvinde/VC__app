import StatusBar from "Components/StatusBar/StatusBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const InvertorsNewFunding = () => {
  return (
    <>
    {/* <StatusBar title="hello" linkBack='/investor-list/invertor-funding' /> */}
      <Container fluid className="px-5">
        <div className="d-flex align-items-center justify-content-end mb-5">
          <button className="btn p-2 border-0">
            <FeatherIcon icon="edit" size={18} />
          </button>
          <button className="btn p-2 border-0">
            <FeatherIcon icon="save" size={18} />
          </button>
        </div>
        <Row className="gy-5">
          <Col md={12} lg={6} className="border-lg-end">
            <div className="py-0 py-lg-5">
              <div>
                <label htmlFor="" className={formStyle.labelText}>
                  Stage of Funding
                </label>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Form.Check type="checkbox" id="" label="Angle" />
                  <Form.Check type="checkbox" id="" label="Pre-Seed" />
                  <Form.Check type="checkbox" id="" label="Seed" />
                  <Form.Check type="checkbox" id="" label="Series" />
                  <Form.Check type="checkbox" id="" label="IPO" />
                </div>
              </div>
              <Row>
                <Col md={12} lg={6}>
                  <Row className="mt-5 gy-4">
                    <Col sm={12}>
                      <div className={formStyle.formGroup}>
                        <label htmlFor="" className="mb-1">
                          Amount Raising
                        </label>
                        <select name="" id="">
                          <option value="">$1,000.00 USDT</option>
                        </select>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className={formStyle.formGroup}>
                        <label htmlFor="" className="mb-1">
                          Amount Raising
                        </label>
                        <select name="" id="">
                          <option value="">$1,000.00 USDT</option>
                        </select>
                        <p className={`m-0 fs-sm ${formStyle.labelText}`}>
                          The Valution you raising the funds at!
                        </p>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className={formStyle.formGroup}>
                        <label htmlFor="" className="mb-1">
                          Equity Offered
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Equity (%)"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="mt-5">
                <label htmlFor="" className={formStyle.labelText}>
                  Please select the information you would like to send to
                  investor?
                </label>
                <div className="d-flex my-2 gap-2 align-items-center justify-content-between">
                  <span>Company information</span>
                  <Form.Check type="switch" id="" />
                </div>
                <div className="d-flex my-2 gap-2 align-items-center justify-content-between">
                  <span>Cap Table</span>
                  <Form.Check type="switch" id="" />
                </div>
                <div className="d-flex my-2 gap-2 align-items-center justify-content-between">
                  <span>Previous Funding Round?</span>
                  <Form.Check type="switch" id="" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="py-0 py-lg-5">
              <div className="mb-5">
                <label htmlFor="" className={formStyle.labelText}>
                  Please answer the following question as requested by VC
                </label>
              </div>
              <Row className="mt-5 gy-4">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      What are you looking for from the investor
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      Explain your start-up!
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className={formStyle.labelText}>
                      other Questions!
                    </label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InvertorsNewFunding;
