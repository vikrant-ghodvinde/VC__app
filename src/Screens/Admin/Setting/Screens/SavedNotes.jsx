import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const SavedNotes = () => {
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
                  <p className="m-0">
                    The information the VC wants to provide will be shown here
                    afetr the save buttion has been clicked The information the
                    VC wants to provide will be shown here afetr the save
                    buttion has been clicked
                  </p>
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
              <p className={formStyle.labelText}>Question 1</p>
              <p>
                The Question will be shown here, after the save button is
                clicked
              </p>
            </Col>
            <Col xs={12}>
              <p className={formStyle.labelText}>Question 2</p>
              <p>
                The Question will be shown here, after the save button is
                clicked
              </p>
            </Col>
            <Col xs={12}>
              <p className={formStyle.labelText}>Question 3</p>
              <p>
                The Question will be shown here, after the save button is
                clicked
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default SavedNotes;
