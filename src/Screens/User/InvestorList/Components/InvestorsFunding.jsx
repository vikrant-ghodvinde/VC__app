import React from "react";
import { Container } from "react-bootstrap";
import StatusBar from "Components/StatusBar/StatusBar";
import { Link, Outlet, useLocation } from "react-router-dom";

const InvertorsFunding = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      {
        location.pathname === "/investor-list/invertor-funding" && <StatusBar linkBack='/investor-list' linkNext="/investor-list/invertor-funding/document" />
      }
      {
        location.pathname === "/investor-list/invertor-funding/document" && <StatusBar linkBack='/investor-list/invertor-funding' linkNext="/investor-list/invertor-funding/summary" />
      }
      {
        location.pathname === "/investor-list/invertor-funding/summary" && <StatusBar linkBack='/investor-list/invertor-funding/document'  />
      }
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="d-flex gap-4 align-items-center mb-5">
            <Link to="/investor-list/invertor-funding" style={{ cursor: "pointer" }} 
            className={`${location.pathname === "/investor-list/invertor-funding" && "page-title"} mb-0 text-dark`}
            >
              New Funding
            </Link>
            <Link to="/investor-list/invertor-funding/document" style={{ cursor: "pointer" }}
            className={`${location.pathname === "/investor-list/invertor-funding/document" && "page-title"} mb-0 text-dark`}
            >
              Documents
            </Link>
            <Link to="/investor-list/invertor-funding/summary" style={{ cursor: "pointer" }}
            className={`${location.pathname === "/investor-list/invertor-funding/summary" && "page-title"} mb-0 text-dark`}
            >
              Summary
            </Link>
          </div>
          <div className="page-content">
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};

export default InvertorsFunding;
