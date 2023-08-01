import FlexContainer from "Components/FlexContainer/FlexContainer";
import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const CreateAccount = () => {
  const [fundName, setFundName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate()
  const handleCreateAccount = () => {
    if (validateForm()) {
      navigate("/admin-fundtype")
    }
  };

  const validateForm = () => {
    // Reset previous errors
    setErrors({});
    let isValid = true;

    // Check if the fields are empty and set error states accordingly
    if (fundName.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, fundName: "Name of the Fund is required" }));
      isValid = false;
    }

    if (firstName.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "First Name is required" }));
      isValid = false;
    }

    if (lastName.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "Last Name is required" }));
      isValid = false;
    }

    if (email.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
      isValid = false;
    }

    if (phone.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "Phone is required" }));
      isValid = false;
    }

    if (password.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required" }));
      isValid = false;
    }

    if (rePassword.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, rePassword: "Re-Password is required" }));
      isValid = false;
    }

    if (password !== rePassword) {
      setErrors((prevErrors) => ({ ...prevErrors, rePassword: "Passwords do not match" }));
      isValid = false;
    }

    if (!agreedToTerms) {
      setErrors((prevErrors) => ({ ...prevErrors, agreedToTerms: "You must agree to Terms & Conditions" }));
      isValid = false;
    }

    return isValid;
  };

  // State to store form errors
  const [errors, setErrors] = useState({});

  return (
    <div className="">
      <FlexContainer title="Hello" menus={false} homeButton={false}>
        <div className="mb-4 fs-6">Create an Account</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="g-2">
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="fundName">
                    Name of the Fund<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="fundName"
                    id="fundName"
                    value={fundName}
                    onChange={(e) => setFundName(e.target.value)}
                  />
                  {errors.fundName && <p className="text-danger">{errors.fundName}</p>}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="firstName">
                    First Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="phone">
                    Phone<span>*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
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
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  {errors.rePassword && <p className="text-danger">{errors.rePassword}</p>}
                </div>
              </Col>
              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  id="agreedToTerms"
                  label="I agree to Terms & Conditions"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                {errors.agreedToTerms && <p className="text-danger">{errors.agreedToTerms}</p>}
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/" className="btn">
            LOGIN
          </Link>
          <button type="button" onClick={handleCreateAccount} className="btn btn-glow">
            NEXT
          </button>
        </div>
      </FlexContainer>
    </div>
  );
};

export default CreateAccount;
