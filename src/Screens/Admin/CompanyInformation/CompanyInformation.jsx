import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CompanyInfo from "./Components/CompanyInfo";
import CapTable from "./Components/CapTable";
import DataRoom from "./Components/DataRoom";

const CompanyInformation = () => {
  const [pageType, setPageType] = useState("companyInformation");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div
            className={`${
              pageType === "companyInformation" && "page-title"
            } mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("companyInformation")}
          >
            Company Information
          </div>
          <div
            className={`${pageType === "capTable" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("capTable")}
          >
            Cap Table
          </div>
          <div
            className={`${pageType === "previousFunding" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("previousFunding")}
          >
            Previous Funding
          </div>
          <div
            className={`${pageType === "dataRoom" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("dataRoom")}
          >
            Data Room
          </div>
        </div>
        <div className="page-content">
          {pageType === "companyInformation" && <CompanyInfo />}
          {pageType === "capTable" && <CapTable />}
          {pageType === "previousFunding" && "Previous Funding"}
          {pageType === "dataRoom" && <DataRoom />}
        </div>
      </Container>
    </div>
  );
};

export default CompanyInformation;
