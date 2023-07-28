import React from "react";
import StatusBar from "Components/StatusBar/StatusBar";
import { Col, Container, Row, Form } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const EditShareholder = () => {
  return (
    <>
      <StatusBar title="New Shareholder" link="/cap-table" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="page-title">Edit Shareholder</div>
          <div className="page-content">
            <Row className="gy-5">
              <Col md={12} lg={6} xl={3}>
                <Row className="g-2">
                  <Col xs={12} className="mb-5">
                    <div className={formStyle.formGroup}>
                      <select name="" id="">
                        <option value="">Type of Security</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        First Name
                      </label>
                      <input type="text" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Last Name
                      </label>
                      <input type="text" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Phone
                      </label>
                      <input type="number" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Email
                      </label>
                      <input type="email" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Type of Shareholder
                      </label>
                      <input type="email" name="" id="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={6} xl={3}>
                <Row className="g-2">
                  <Col xs={12} className="mb-5">
                    <div className={formStyle.formGroup}>
                      <select name="" id="">
                        <option value="">Holder</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        No of Shares
                      </label>
                      <input type="text" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Equity (%)
                      </label>
                      <input type="text" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Estimate Value
                      </label>
                      <div className={formStyle.inputSelectField}>
                        <span>$</span>
                        <input type="number" name="" id="" />
                        <select name="" id="">
                          <option value="USDT">USDT</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Notes
                      </label>
                      <textarea name="" id=""></textarea>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <div className="d-flex align-items-center gap-4">
                  <Form.Check type="checkbox" id="" label="Yes" />
                  <Form.Check type="checkbox" id="" label="No" />
                </div>
              </Col>
            </Row>
            <div className="footer_button-fix__without--width">
              <button className="btn btn-dark">Save</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EditShareholder;
