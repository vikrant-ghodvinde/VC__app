import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const EditDetails = ({pagetype}) => {
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

  const handleNext = () => {
    if (!companyName.trim() || !industryType.trim()) {
      alert("Company Name and Industry Type are mandatory fields.");
      return;
    }

    alert("Data saved successfully!");
  };
  useEffect(() => {
    console.log(pagetype)
    if(pagetype === "saved"){
      console.log("function called")
      handleNext()
    }
  }, [pagetype])
  
  return (
    <Row className="gy-5 mt-4">
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Company Name
              </label>
              <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                ABN
              </label> 
              <input value={abn} onChange={(e) => setAbn(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Number of employee
              </label> 
              <Col xs={12} sm={6} md={3}>
                <input value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} type="text" name="" id="" />
              </Col>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Industry Type (e.g FinTech)
              </label>
              <input value={industryType} onChange={(e) => setIndustryType(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Address
              </label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} name="" id=""></textarea>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={`${formStyle.labelText}`}>Point of Contact</div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Name
              </label>
              <input value={pointOfContactName} onChange={(e) => setPointOfContactName(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Role (Founder/Co-Founder)
              </label>
              <input value={pointOfContactRole} onChange={(e) => setPointOfContactRole(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input value={pointOfContactPhone} onChange={(e) => setPointOfContactPhone(e.target.value)} type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input value={pointOfContactEmail} onChange={(e) => setPointOfContactEmail(e.target.value)} type="email" name="" id="" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-4">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/facebook.png"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/twitter.png"
                  alt="twitter"
                  className="img-fluid"
                />
                <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/instagram.png"
                  alt="instagram"
                  className="img-fluid"
                />
                <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/linkedin.png"
                  alt="linkedin"
                  className="img-fluid"
                />
                <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/tiktok.png"
                  alt="tiktok"
                  className="img-fluid"
                />
                <input type="text" value={tiktok} onChange={(e) => setTiktok(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/youtube.svg"
                  alt="youtube"
                  className="img-fluid"
                />
                <input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/internet.png"
                  alt="internet"
                  className="img-fluid"
                />
                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-4">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="" onChange={(e) => setCountry(e.target.value)}>
                <option value="">Country</option>
              </select>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="" onChange={(e) => setCity(e.target.value)}>
                <option value="">City</option>
              </select>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EditDetails;
