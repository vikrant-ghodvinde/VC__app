import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Industry from "./Components/Industry";
import Country from "./Components/Country";
import Profile from "./Components/Profile";
import Status from "./Components/Status";
import Notes from "./Components/Notes";

const Setting = () => {
  const [pageType, setPageType] = useState("industry");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div
            className={`${pageType === "industry" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("industry")}
          >
            Industry
          </div>
          <div
            className={`${pageType === "country" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("country")}
          >
            Country
          </div>
          <div
            className={`${pageType === "notes" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("notes")}
          >
            Notes
          </div>
          <div
            className={`${pageType === "status" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("status")}
          >
            Status
          </div>
          <div
            className={`${pageType === "profile" && "page-title"} mb-0`}
            style={{ cursor: "pointer" }}
            onClick={() => setPageType("profile")}
          >
            Profile
          </div>
        </div>
        <div className="page-content">
          {pageType === "industry" && <Industry />}
          {pageType === "country" && <Country />}
          {pageType === "notes" && <Notes />}
          {pageType === "status" && <Status />}
          {pageType === "profile" && <Profile />}
        </div>
      </Container>
    </div>
  );
};

export default Setting;
