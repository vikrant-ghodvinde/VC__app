import FlexContainer from "Components/FlexContainer/FlexContainer";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const StartUpLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    // Perform validation before allowing login
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      return;
    }

    // If validation passes, proceed with login
    navigate('/dashboard');
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
                  <label htmlFor="">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <div className="text-danger">{emailError}</div>}
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password" // Use type="password" to mask the password
                    name=""
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <div className="text-danger">{passwordError}</div>}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-5 w-100 d-flex align-items-center justify-content-between footer_button-fix">
          <Link to="/register" className="btn btn-glow white">
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

export default StartUpLogin;
