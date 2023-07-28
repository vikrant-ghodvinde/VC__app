import React, { useState } from "react";
import { Container } from "react-bootstrap";
import List from "./Components/List";

const InvertorList = () => {
  const [pageType, setPageType] = useState("list");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div
            className={`${pageType === "list" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("list")}
          >
            List
          </div>
          <div
            className={`${pageType === "shortlist" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("shortlist")}
          >
            Shortlist
          </div>
        </div>
        <div className="page-content">
          {pageType === "list" && <List />}
          {pageType === "shortlist" && "Shortlist"}
        </div>
      </Container>
    </div>
  );
};

export default InvertorList;
