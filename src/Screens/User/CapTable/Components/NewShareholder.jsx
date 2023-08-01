import React, { useState } from "react";
import StatusBar from "Components/StatusBar/StatusBar";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Col, Container, Row, Form } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const NewShareholder = () => {
      // State variables for input values
      const [typeOfSecurity, setTypeOfSecurity] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [typeOfShareholder, setTypeOfShareholder] = useState("");
      const [holder, setHolder] = useState("");
      const [numberOfShares, setNumberOfShares] = useState("");
      const [equityPercentage, setEquityPercentage] = useState("");
      const [estimateValue, setEstimateValue] = useState("");
      const [notes, setNotes] = useState("");
      const [isAgreedOne, setIsAgreedOne] = useState(false);
      const [isAgreedTwo, setIsAgreedTwo] = useState(false);
    
      // Handle form submission
      const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can use the state variables to access the input values and submit them as needed.
        const formData = {
          typeOfSecurity,
          firstName,
          lastName,
          phone,
          email,
          typeOfShareholder,
          holder,
          numberOfShares,
          equityPercentage,
          estimateValue,
          notes,
          isAgreedOne,
          isAgreedTwo,
        };
        console.log(formData);
        
      };
  return (
    <>
      <StatusBar title="New Shareholder" linkBack="/cap-table" />
      <div className="page__wrapper">
        <Container fluid className="px-5">
          <div className="page-title">New Shareholder</div>
          <div className="page-content">
          <Row className="gy-5">
              <Col md={12} lg={6} xl={3}>
                <Row className="g-2">
                  <Col xs={12} className="mb-5">
                    <div className={formStyle.formGroup}>
                      <select name="" id="" onChange={(e) => setTypeOfSecurity(e.target.value)}>
                        <option value="">Type of Security</option>
                        <option value='common-equity'>Common Equity (CE)</option>
                        <option value='pref-share'>Pref Share</option>
                        <option value='venture-debt'>Venture Debts</option>
                        <option value='warrants'>Warrants</option>
                        <option value='safe'>Safe</option>
                        <option value='convertible'>Convertible</option>
                        <option value='ESOPs'>ESOPs</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        First Name
                      </label>
                      <input onChange={(e) => setFirstName(e.target.value)} type="text" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Last Name
                      </label>
                      <input onChange={(e) => setLastName(e.target.value)} type="text" name="" id="" />
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
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Type of Shareholder
                      </label>
                      <input onChange={(e) => setTypeOfShareholder(e.target.value)} type="email" name="" id="" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={6} xl={3}>
                <Row className="g-2">
                  <Col xs={12} className="mb-5">
                    <div className={formStyle.formGroup}>
                      <select name="" id="" onChange={(e) => setHolder(e.target.value)}>
                        <option value="">Holder</option>
                        <option value="founder">Founder</option>
                        <option value="co-founder">Co-Founder</option>
                        <option value="employee">Employee</option>
                        <option value="advisor">Advisor</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        No of Shares
                      </label>
                      <input onChange={(e) => setNumberOfShares(e.target.value)} type="number" name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Equity (%)
                      </label>
                      <input type="text" onChange={(e) => setEquityPercentage(e.target.value)} name="" id="" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Estimate Value
                      </label>
                      <select name="" id="" onChange={(e) => setEstimateValue(e.target.value)}>
                        <option value="1,000" className="d-flex">$1,000.00 USDT</option>
                        <option value="3,000" className="d-flex">$2,000.00 USDT</option>
                        <option value="5,000" className="d-flex">$5,000.00 USDT</option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className={formStyle.formGroup}>
                      <label htmlFor="" className={formStyle.labelText}>
                        Notes
                      </label>
                      <textarea onChange={(e) => setNotes(e.target.value)} name="" id=""></textarea>
                    </div>
                    <button onClick={handleSubmit}>Save</button>
                  </Col>
                </Row>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <div className="d-flex align-items-center gap-4">
                <Form.Check
            type="checkbox"
            id="isAgreedOne"
            label="Yes"
            checked={isAgreedOne}
            onChange={(e) => setIsAgreedOne(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            id="isAgreedTwo"
            label="No"
            checked={isAgreedTwo}
            onChange={(e) => setIsAgreedTwo(e.target.checked)}
          />
                </div>
              </Col>
            </Row>
            <div className="footer_button-fix__without--width">
              <button className="btn btn-dark">Add</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewShareholder;
