import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InvertorsNewFunding from "../Screens/InvestorsNewFunding";
import InvertorsDocuments from "../Screens/InvestorsDocuments";
import InvertorsSummery from "../Screens/InvestorsSummery";
import StatusBar from "Components/StatusBar/StatusBar";

const InvertorsFunding = () => {
  const [pageType, setPageType] = useState("newFunding");
  return (
    <>
      <StatusBar title="New Round" link="/investor-list" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="d-flex gap-4 align-items-center mb-5">
            <div
              className={`${pageType === "newFunding" && "page-title"} mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => setPageType("newFunding")}
            >
              New Funding
            </div>
            <div
              className={`${pageType === "documents" && "page-title"} mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => setPageType("documents")}
            >
              Documents
            </div>
            <div
              className={`${pageType === "summary" && "page-title"} mb-0`}
              style={{ cursor: "pointer" }}
              onClick={() => setPageType("summary")}
            >
              Summary
            </div>
          </div>
          <div className="page-content">
            {pageType === "newFunding" && <InvertorsNewFunding />}
            {pageType === "documents" && <InvertorsDocuments />}
            {pageType === "summary" && <InvertorsSummery />}
          </div>
        </Container>
      </div>
    </>
  );
};

export default InvertorsFunding;
