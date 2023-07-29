import ErrorModal from "Components/ErrorModal/ErrorModal";
import FlexContainer from "Components/FlexContainer/FlexContainer";
import { Country, State, City } from "country-state-city";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const CountryOrCity = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [errorModal, seterrorModal] = useState(false)
  const [errorMessage, seterrorMessage] = useState("")
  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountryData(countries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const states = State.getStatesOfCountry(selectedCountry);
      setStateData(states);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const cities = City.getCitiesOfState(selectedCountry, selectedState);
      setCityData(cities);
    }
  }, [selectedState]);

  const navigate = useNavigate()
  const handleNext = () => {
    if (!selectedCountry) {
      seterrorMessage("Please select a country.");
      seterrorModal(true)
      return;
    }
    if (!selectedState) {
      seterrorMessage("Please select a State.");
      seterrorModal(true)
      return;
    }
    if (!selectedCity) {
      seterrorMessage("Please select a City.");
      seterrorModal(true)
      return;
    }
    navigate("/dashboard")
  };

  return (
    <div className="">
      <FlexContainer title="Hello" menus={false}>
        <Row className="w-100 mb-5">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="gy-5">
              <Col xs={12}>
                <div className="mb-4 text-center">Were are you based?</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="" onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">Country</option>
                    {countryData.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-4 text-center">State</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="" onChange={(e) => setSelectedState(e.target.value)}>
                    <option value="">Select State</option>
                    {stateData.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-4 text-center">City</div>
                <div className={`${styles.formGroup} text-center`}>
                  <select name="" id="" onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">City</option>
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
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/register" className="btn link">
            BACK
          </Link>
          <button onClick={handleNext} className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
      <ErrorModal show={errorModal} setShow={seterrorModal} message={errorMessage}/>
    </div>
  );
};

export default CountryOrCity;
