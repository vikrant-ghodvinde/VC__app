import FlexContainer from "Components/FlexContainer/FlexContainer";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  // State to store form input values and their error states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleLogin = () => {
    // Perform form validation before navigating to /admin
    if (validateForm()) {
      navigate('/admin');
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Reset previous errors
    setFirstNameError("");
    setLastNameError("");

    // Check if the First Name field is empty
    if (firstName.trim() === "") {
      setFirstNameError("First Name is required");
      isValid = false;
    }

    // Check if the Last Name field is empty
    if (lastName.trim() === "") {
      setLastNameError("Last Name is required");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="">
      <FlexContainer title="Hello" menus={true} homeButton={false}>
        <div className="mb-5 fs-6">Login</div>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {firstNameError && <p className="text-danger">{firstNameError}</p>}
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
                  {lastNameError && <p className="text-danger">{lastNameError}</p>}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between">
          <Link to="/admin-register" className="btn btn-glow white">
            SIGN UP
          </Link>
          <button type="button" onClick={handleLogin} className="btn btn-glow">
            LOGIN
          </button>
        </div>
      </FlexContainer>
    </div>
  );
};

export default AdminLogin;
