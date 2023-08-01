import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import EditDetails from "./Components/EditDetails";
import SavedDetails from "./Components/SavedDetails";

const Dashboard = () => {
  const [pageType, setPageType] = useState("saved");
  const [companyName, setCompanyName] = useState("");
  const [abn, setAbn] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [address, setAddress] = useState("");
  const [pointOfContactName, setPointOfContactName] = useState("");
  const [pointOfContactRole, setPointOfContactRole] = useState("");
  const [pointOfContactPhone, setPointOfContactPhone] = useState("");
  const [pointOfContactEmail, setPointOfContactEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [state, setstate] = useState("")
  const handleNext = () => {
    if (!companyName.trim() || !industryType.trim()) {
      alert("Company Name and Industry Type are mandatory fields.");
      return;
    }
    alert("Data saved successfully!");
    console.log(companyName,industryType,abn,phone,email,pointOfContactEmail)
    setPageType("saved")
  };

  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="page-title">Company Information</div>
        <div className="d-flex align-items-center justify-content-end">
          <button className="btn p-2 border-0" onClick={() => setPageType("edit")}>
            <FeatherIcon icon="edit" size={18} />
          </button>
          <button className="btn p-2 border-0" onClick={() => { handleNext(); }}>
            <FeatherIcon icon="save" size={18} />
          </button>
        </div>
        <div className="page-content">
          <div className="">Customer Number 123455</div>
          {pageType === "edit" && <EditDetails
            pagetype={pageType}
            setPageType={setPageType}
            setCompanyName={setCompanyName}
            setAbn={setAbn}
            setPhone={setPhone}
            setEmail={setEmail}
            setNumberOfEmployees={setNumberOfEmployees}
            setIndustryType={setIndustryType}
            setAddress={setAddress}
            setPointOfContactName={setPointOfContactName}
            setPointOfContactRole={setPointOfContactRole}
            setPointOfContactPhone={setPointOfContactPhone}
            setPointOfContactEmail={setPointOfContactEmail}
            setFacebook={setFacebook}
            setTwitter={setTwitter}
            setInstagram={setInstagram}
            setLinkedin={setLinkedin}
            setTiktok={setTiktok}
            setYoutube={setYoutube}
            setWebsite={setWebsite}
            setCountry={setCountry}
            setCity={setCity}
            setIsSubscribed={setIsSubscribed}
            setstate={setstate}
            country={country}
            city={city}
            state={state}
          />
          }
          {pageType === "saved" && <SavedDetails />}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
