import FlexContainer from "Components/FlexContainer/FlexContainer";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [agreeTerms, setagreeTerms] = useState(false)
  const [rePassword, setrePassword] = useState("")
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setagreeTerms(pre => !pre)
  };

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic for inputs
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    }
    if (formData.password !== rePassword) {
      errors.rePassword = "Passwords do not match.";
    }
    if (!agreeTerms) {
      errors.agreeTerms = "You must agree to the Terms & Conditions.";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      navigate("/select-country")
    }
  };
  return (
    <div className="">
      <FlexContainer title="Hello" menus={false}>
        <div className="mb-5">Create an Account</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="g-2">
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="firstName">
                    First Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && (
                    <div className="text-danger">{formErrors.firstName}</div>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="lastName">
                    Last Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastName && (
                    <div className="text-danger">{formErrors.lastName}</div>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <div className="text-danger">{formErrors.email}</div>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="password">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {formErrors.password && (
                    <div className="text-danger">{formErrors.password}</div>
                  )}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="rePassword">
                    Re-Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    value={rePassword}
                    onChange={(e) => setrePassword(e.target.value)}
                  />
                  {formErrors.rePassword && (
                    <div className="text-danger">{formErrors.rePassword}</div>
                  )}
                </div>
              </Col>
              <Col xs={12} className="mt-5">
              <Form.Check
                  type="checkbox"
                  id="agreeTerms"
                  label="I agree to Terms & Conditions"
                  onChange={handleCheckboxChange}
                />
                {formErrors.agreeTerms && (
                  <div className="text-danger">{formErrors.agreeTerms}</div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn link">
            BACK
          </Link>
          <button className="btn btn-glow" onClick={handleSubmit}>
            NEXT
          </button>
        </div>
      </FlexContainer>
    </div>
  );
};

export default Register;
