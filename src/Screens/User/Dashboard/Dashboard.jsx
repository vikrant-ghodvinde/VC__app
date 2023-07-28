import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import EditDetails from "./Components/EditDetails";
import SavedDetails from "./Components/SavedDetails";

const Dashboard = () => {
  const [pageType, setPageType] = useState("saved");
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="page-title">Company Information</div>
        <div className="d-flex align-items-center justify-content-end">
          <button className="btn p-2 border-0" onClick={()=> setPageType("edit")}>
            <FeatherIcon icon="edit" size={18} />
          </button>
          <button className="btn p-2 border-0" onClick={()=> setPageType("saved")}>
            <FeatherIcon icon="save" size={18} />
          </button>
        </div>
        <div className="page-content">
          <div className="">Customer Number 123455</div>
          {pageType === "edit" && <EditDetails />  }
          {pageType === "saved" && <SavedDetails />  }
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
