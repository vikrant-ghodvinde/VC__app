import React, { useState } from "react";
import { Container } from "react-bootstrap";
import All from "./Components/All";

const Application = () => {
  const [pageType, setPageType] = useState("all");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div
            className={`${pageType === "all" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("all")}
          >
            All
          </div>
          <div
            className={`${pageType === "pending" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("pending")}
          >
            Pending
          </div>
          <div
            className={`${pageType === "unsuccessful" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("unsuccessful")}
          >
            Unsuccessful
          </div>
          <div
            className={`${
              pageType === "initialCommunication" && "page-title"
            } mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("initialCommunication")}
          >
            Initial Communication
          </div>
          <div
            className={`${pageType === "dueDiligence" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("dueDiligence")}
          >
            Due Diligence
          </div>
          <div
            className={`${pageType === "funded" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("funded")}
          >
            Funded
          </div>
        </div>
        <div className="page-content">
          {pageType === "all" && <All />}
          {pageType === "pending" && "pending"}
          {pageType === "unsuccessful" && "unsuccessful"}
          {pageType === "initialCommunication" && "initialCommunication"}
          {pageType === "dueDiligence" && "dueDiligence"}
          {pageType === "funded" && "funded"}
        </div>
      </Container>
    </div>
  );
};

export default Application;
