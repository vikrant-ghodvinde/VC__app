import FlexContainer from "Components/FlexContainer/FlexContainer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

const AdminLogin = () => {
  const navigate = useNavigate()
  const handleLogin = () =>{
    navigate('/admin')
  }
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
                    First Name<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${styles.formGroup} text-center`}>
                  <label htmlFor="">
                    First Name<span>*</span>
                  </label>
                  <input type="text" name="" id="" />
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
