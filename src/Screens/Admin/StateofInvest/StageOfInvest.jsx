import ErrorModal from "Components/ErrorModal/ErrorModal";
import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function StageOfInvest() {
	const [selectedState, setSelectedStage] = React.useState(null);
	const [message, setmessage] = useState("")
	const [show, setShow] = useState(false)
	const navigate = useNavigate()
  
	const handleStageSelection = (event) => {
	  if (event.target.checked) {
		setSelectedStage(event.target.value);
	  } else {
		setSelectedStage(null);
	  }
	};
  
	const handleNext = () =>{
	  if(selectedState === null){
		setmessage("Select Stage for next step")
		setShow(true)
		return
	  }
	  navigate('/admin-industry')
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
				name="pre-seed"
				id="pre-seed"
				label="Pre Seed"
				value="pre-seed"
				onChange={handleStageSelection}
				checked={selectedState === "pre-seed"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="seed"
				id="seed"
				label="Seed"
				value="seed"
				onChange={handleStageSelection}
				checked={selectedState === "seed"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="angel"angel
				id="angel"
				label="Angel"
				value="angel"
				onChange={handleStageSelection}
				checked={selectedState === "angel"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="growth"
				id="growth"
				label="Growth"
				value="growth"
				onChange={handleStageSelection}
				checked={selectedState === "growth"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="series-a"
				id="series-a"
				label="Series A"
				value="series-a"
				onChange={handleStageSelection}
				checked={selectedState === "series-a"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="series-b"
				id="series-b"
				label="Series B"
				value="series-b"
				onChange={handleStageSelection}
				checked={selectedState === "series-b"}
			  />
			</Col>
			<Col xs={12}>
			  <Form.Check
				type="checkbox"
				name="pre-ipo"
				id="pre-ipo"
				label="Pre IPO"
				value="pre-ipo"
				onChange={handleStageSelection}
				checked={selectedState === "pre-ipo"}
			  />
			</Col>
		  </Row>
		</Col>
	  </Row>
	  <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
		<Link to="/admin-invest-in-country" className="btn">
		  Back
		</Link>
		<button onClick={handleNext} type="button" className="btn btn-glow">
		  NEXT
		</button>
	  </div>
	</FlexContainer>
	<ErrorModal message={message} setShow={setShow} show={show}/>
  </div>
  )
}

export default StageOfInvest