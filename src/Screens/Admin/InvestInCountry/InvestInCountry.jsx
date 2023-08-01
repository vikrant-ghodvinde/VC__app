import ErrorModal from "Components/ErrorModal/ErrorModal";
import FlexContainer from "Components/FlexContainer/FlexContainer";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const InvestInCountry = () => {
      // State variable to store selected checkboxes
      const [selectedCountries, setSelectedCountries] = useState([]);
      const [message, setmessage] = useState("")
      const [show, setShow] = useState(false)
      const navigate = useNavigate()
      // Function to handle checkbox changes
      const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedCountries((prevSelected) =>
          checked
            ? [...prevSelected, value]
            : prevSelected.filter((country) => country !== value)
        );
      };
      const handleNext = () =>{
        if(selectedCountries.length <= 0){
          setmessage("Please Select any country to proceed next")
          setShow(true)
          return
        }
        navigate('/admin-stage')
      }
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 text-center">
          <p className="fs-6">Country You Invest in?*</p>
          <span className="fs-sm">You can select multiple!</span>
        </div>
        <Row className="w-100">
          <Col md={12} lg={10} className="mx-auto">
          <Row className="gy-3">
              <Col md={6} lg={4}>
              <Form.Check
                  type="checkbox"
                  value="Global"
                  id="global"
                  label="Global"
                  checked={selectedCountries.includes("Global")}
                  onChange={handleCheckboxChange}
                />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check
                value='India'
                type="checkbox"
                 id="india" 
                 label="India"
                 checked={selectedCountries.includes("India")}
                 onChange={handleCheckboxChange}
                  />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check 
                type="checkbox" 
                id="USA" 
                label="USA"
                value='USA'
                checked={selectedCountries.includes("USA")}
                onChange={handleCheckboxChange}
                 />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check 
                type="checkbox"
                id="UK" 
                label="UK"
                value='UK'
                checked={selectedCountries.includes("UK")}
                onChange={handleCheckboxChange}
                 />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check
                type="checkbox" 
                id="New Zealand" 
                label="New Zealand"
                value='New Zealand'
                checked={selectedCountries.includes("New Zealand")}
                onChange={handleCheckboxChange}
                 />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check
                type="checkbox" 
                id="singapore" 
                value='Singapore'
                label="Singapore"
                checked={selectedCountries.includes("Singapore")}
                onChange={handleCheckboxChange}
                 />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check 
                type="checkbox"
                id="Malaysia"
                value='Malaysia' 
                label="Malaysia" 
                checked={selectedCountries.includes("Malaysia")}
                onChange={handleCheckboxChange}
                />
              </Col>
              <Col md={6} lg={4}>
                <Form.Check
                type="checkbox" 
                id="Australia"
                value='Australia' 
                label="Australia" 
                checked={selectedCountries.includes("Australia")}
                onChange={handleCheckboxChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/admin-fundtype" className="btn">
            Back
          </Link>
          <button onClick={handleNext} type="button" className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
      <ErrorModal message={message} setShow={setShow} show={show}/>
    </div>
  );
};

export default InvestInCountry;
