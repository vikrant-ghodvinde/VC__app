import ErrorModal from "Components/ErrorModal/ErrorModal";
import FlexContainer from "Components/FlexContainer/FlexContainer";
import industryOptions from "arrayFiles/industryList";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Industry = () => {
    // State variable to store selected industries
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [message, setmessage] = useState("")
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      setSelectedIndustries((prevSelected) =>
        checked ? [...prevSelected, value] : prevSelected.filter((industry) => industry !== value)
      );
    };

    const handleNext = () =>{
      if(selectedIndustries.length <= 0){
        setmessage("select any industry for next")
        setShow(true)
        return
      }
      navigate('/admin')
    }
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 text-center">
          <p className="fs-6">Industry</p>
        </div>
        <Row className="w-100 overflow-y-auto mb-5git">
          <Col md={12} lg={10} className="mx-auto">
            <Row className="gy-3">
            {industryOptions?.map((industry) => (
                <Col md={6} lg={3} key={industry}>
                  <Form.Check
                    type="checkbox"
                    id={industry}
                    label={industry}
                    value={industry}
                    checked={selectedIndustries.includes(industry)}
                    onChange={handleCheckboxChange}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn">
            Back
          </Link>
          <button onClick={handleNext}  type="button" className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
      <ErrorModal message={message} setShow={setShow} show={show}/>
    </div>
  );
};

export default Industry;
