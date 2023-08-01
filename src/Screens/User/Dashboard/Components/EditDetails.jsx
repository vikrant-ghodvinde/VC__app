import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";
import { City, Country, State } from "country-state-city";

const EditDetails = (props) => {
  const {
    setPageType,
    setCompanyName,
    setAbn,
    setPhone,
    setEmail,
    setNumberOfEmployees,
    setIndustryType,
    setAddress,
    setPointOfContactName,
    setPointOfContactRole,
    setPointOfContactPhone,
    setPointOfContactEmail,
    setFacebook,
    setTwitter,
    setInstagram,
    setLinkedin,
    setTiktok,
    setYoutube,
    setWebsite,
    setCountry,
    setCity,
    setIsSubscribed,
    state,
    setstate,
    city,
    country
  } = props

  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountryData(countries);
  }, []);

  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country);
      setStateData(states);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(country, state);
      setCityData(cities);
    }
  }, [state]);
  return (
    <Row className="gy-5 mt-4">
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Company Name
              </label>
              <input  onChange={(e) => setCompanyName(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                ABN
              </label>
              <input  onChange={(e) => setAbn(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input onChange={(e) => setPhone(e.target.value)} type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" />
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
                <input  onChange={(e) => setNumberOfEmployees(e.target.value)} type="text" name="" id="" />
              </Col>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Industry Type (e.g FinTech)
              </label>
              <input  onChange={(e) => setIndustryType(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Address
              </label>
              <textarea  onChange={(e) => setAddress(e.target.value)} name="" id=""></textarea>
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
              <input  onChange={(e) => setPointOfContactName(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Role (Founder/Co-Founder)
              </label>
              <input  onChange={(e) => setPointOfContactRole(e.target.value)} type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input  onChange={(e) => setPointOfContactPhone(e.target.value)} type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input  onChange={(e) => setPointOfContactEmail(e.target.value)} type="email" name="" id="" />
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
                <input type="text"  onChange={(e) => setFacebook(e.target.value)} name="" id="" />
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
                <input type="text" onChange={(e) => setTwitter(e.target.value)} name="" id="" />
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
                <input type="text" onChange={(e) => setInstagram(e.target.value)} name="" id="" />
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
                <input type="text" onChange={(e) => setLinkedin(e.target.value)} name="" id="" />
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
                <input type="text" onChange={(e) => setTiktok(e.target.value)} name="" id="" />
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
                <input type="text"  onChange={(e) => setYoutube(e.target.value)} name="" id="" />
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
                <input type="text" onChange={(e) => setWebsite(e.target.value)} name="" id="" />
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
                <option selected hidden disabled>Country</option>
                {countryData.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
              </select>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="" onChange={(e) => setstate(e.target.value)}>
                <option selected disabled hidden>State</option>
                {stateData.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
              </select>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="" onChange={(e) => setCity(e.target.value)}>
                <option selected disabled hidden>City</option>
                {cityData.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
              </select>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EditDetails;
