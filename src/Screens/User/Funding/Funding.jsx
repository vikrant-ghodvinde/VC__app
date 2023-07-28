import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FundingTable from "./Components/FundingTable";
import ApplicationTable from "./Components/ApplicationTable";

const Funding = () => {
  const [pageType, setPageType] = useState("fundingTable");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div
            className={`${pageType === "fundingTable" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("fundingTable")}
          >
            Funding Table
          </div>
          <div
            className={`${pageType === "application" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("application")}
          >
            Application
          </div>
        </div>
        <div className="page-content">
          {pageType === "fundingTable" && <FundingTable />}
          {pageType === "application" && <ApplicationTable />}
        </div>
      </Container>
    </div>
  );
};

export default Funding;
