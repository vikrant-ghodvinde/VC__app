import StatusBar from "Components/StatusBar/StatusBar";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const NewFundingShareholder = () => {
  const [pageType, setPageType] = useState("setUp");
  return (
    <>
      <StatusBar title="Previous Funding Round" link="/funding" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="d-flex gap-4 align-items-center mb-5">
            <div
              className={`${pageType === "setUp" && "page-title"} mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => setPageType("setUp")}
            >
              Funding Table
            </div>
            <div
              className={`${pageType === "agreement" && "page-title"} mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => setPageType("agreement")}
            >
              Funding Table
            </div>
          </div>
          <div className="page-content">
            {pageType === "setUp" && (
              <div className="page-content position-relative mh-70">
                <div>
                  <label className={formStyle.labelText}>
                    Have you received funding before?
                  </label>
                  <div className="d-flex align-items-center gap-4">
                    <Form.Check type="checkbox" id="" label="Yes" />
                    <Form.Check type="checkbox" id="" label="No" checked />
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-dark">New Round</button>
                  </div>
                </div>
                <div className="position-absolute end-0 bottom-0">
                  <button className="btn btn-dark">Next</button>
                </div>
              </div>
            )}
            {pageType === "application" && null}
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewFundingShareholder;
