import ErrorModal from "Components/ErrorModal/ErrorModal";
import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TypeOfFund = () => {
  const [selectedFund, setSelectedFund] = React.useState(null);
  const [message, setmessage] = useState("")
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleFundSelection = (event) => {
    if (event.target.checked) {
      setSelectedFund(event.target.value);
    } else {
      setSelectedFund(null);
    }
  };

  const handleNext = () =>{
    if(selectedFund === null){
      setmessage("Select type for next step")
      setShow(true)
      return
    }
    navigate('/admin-invest-in-country')
  }

  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-5 fs-6">Type of Fund</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="gy-3">
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="fundType"
                  id="ventureCapital"
                  label="Venture Capital"
                  value="ventureCapital"
                  onChange={handleFundSelection}
                  checked={selectedFund === "ventureCapital"}
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="fundType"
                  id="angelSyndicate"
                  label="Angel Syndicate"
                  value="angelSyndicate"
                  onChange={handleFundSelection}
                  checked={selectedFund === "angelSyndicate"}
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="fundType"
                  id="corporateVentureCapital"
                  label="Corporate Venture Capital"
                  value="corporateVentureCapital"
                  onChange={handleFundSelection}
                  checked={selectedFund === "corporateVentureCapital"}
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="fundType"
                  id="fundManagerOthers"
                  label="Fund Manager (Others)"
                  value="fundManagerOthers"
                  onChange={handleFundSelection}
                  checked={selectedFund === "fundManagerOthers"}
                />
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="fundType"
                  id="fundManagerOthers2"
                  label="Fund Manager (Others)"
                  value="fundManagerOthers2"
                  onChange={handleFundSelection}
                  checked={selectedFund === "fundManagerOthers2"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn">
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

export default TypeOfFund;
