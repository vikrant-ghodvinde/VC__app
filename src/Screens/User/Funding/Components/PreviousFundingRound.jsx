import React, { useState } from "react";
import StatusBar from "Components/StatusBar/StatusBar";
import { Container, Form } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import FundingRoundModal from "./FundingRoundModal";

const PreviousFundingRound = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <StatusBar title="Previous Funding Round" link="/funding" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="page-title">Set up</div>
          <div className="page-content position-relative mh-70">
            <div>
              <label className={formStyle.labelText}>
                Have you received funding before?
              </label>
              <div className="d-flex align-items-center gap-4">
                <Form.Check type="checkbox" id="" label="Yes" />
                <Form.Check type="checkbox" id="" label="No" />
              </div>
            </div>
            <div className="position-absolute end-0 bottom-0">
              <button className="btn btn-dark" onClick={() => setShow(true)}>Add</button>
            </div>
          </div>
        </Container>
      </div>
      <FundingRoundModal show={show} setShow={setShow} />
    </>
  );
};

export default PreviousFundingRound;
