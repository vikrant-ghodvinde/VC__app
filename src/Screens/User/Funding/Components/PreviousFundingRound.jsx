import React, { useState } from "react";
import StatusBar from "Components/StatusBar/StatusBar";
import { Col, Container, Form, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FundingRoundModal from "./FundingRoundModal";

const PreviousFundingRound = () => {
  const [show, setShow] = useState(false);
  const [isCheck, setIsCheck] = useState("");
  return (
    <>
      <StatusBar title="Previous Funding Round" linkBack="/funding" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="page-title">Set up</div>
          <div className="page-content position-relative mh-70">
            <Row className="gy-4">
              <Col xs={12}>
                <div>
                  <label className={formStyle.labelText}>
                    Have you received funding before?
                  </label>
                  <div className="d-flex align-items-center gap-4">
                    <Form.Check
                      type="checkbox"
                      name="funding"
                      value={isCheck}
                      id=""
                      label="Yes"
                      checked={isCheck === "yes"}
                      onChange={() => setIsCheck("yes")}
                    />
                    <Form.Check
                      type="checkbox"
                      name="funding"
                      value={isCheck}
                      id=""
                      label="No"
                      checked={isCheck === "no"}
                      onChange={() => setIsCheck("no")}
                    />
                  </div>
                </div>
              </Col>
              {isCheck === "yes" && (
                <>
                  <Col xs={12}>
                    <div>
                      <label className={formStyle.labelText}>
                        Stage of Funding* (if you have received more than 1
                        funding round start from the first)
                      </label>
                      <div className="d-flex align-items-center gap-4">
                        <Form.Check type="checkbox" id="" label="Angle" />
                        <Form.Check type="checkbox" id="" label="Pre- Seed" />
                        <Form.Check type="checkbox" id="" label="Seed" />
                        <Form.Check type="checkbox" id="" label="Series" />
                        <Form.Check type="checkbox" id="" label="IPO" />
                      </div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Amount you have already raising?*
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
                    <div>
                      <label className={formStyle.labelText}>
                        Raised though?*
                      </label>
                      <div className="d-flex align-items-center gap-4">
                        <Form.Check
                          type="checkbox"
                          id=""
                          label="Angle Investor"
                        />
                        <Form.Check type="checkbox" id="" label="VC" />
                        <Form.Check
                          type="checkbox"
                          id=""
                          label="Venture Debt"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <Row>
                      <Col md={2}>
                        <div className={formStyle.formGroup}>
                          <label htmlFor="" className={formStyle.labelText}>
                            Equity give away?*
                          </label>
                          <input type="text" name="" id="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Amount you have already raising?*
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
                </>
              )}
              {isCheck === "no" && (
                <Col xs={12}>
                  <button className="btn btn-dark">New Round</button>
                </Col>
              )}
            </Row>
            <div className="position-absolute end-0 bottom-0">
              <button className="btn btn-dark" onClick={() => setShow(true)}>
                Add
              </button>
            </div>
          </div>
        </Container>
      </div>
      <FundingRoundModal show={show} setShow={setShow} />
    </>
  );
};

export default PreviousFundingRound;
