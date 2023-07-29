import FlexContainer from "Components/FlexContainer/FlexContainer";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { setUserType } from "globalStateManagement/actions/userTypeAction";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "Styles/FormControl.module.css";

import {useDispatch,useSelector} from 'react-redux'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSetUserType = (type) =>{
    dispatch(setUserType(type))
    if(type === "corporate"){
      navigate("/admin-login")
    }else{
    navigate("/startup-login")
    }
  }
  return (
    <div className="">
      <FlexContainer title="Hello" menus={true} homeButton={true}>
        <div className="mb-5">I am ☝🏼</div>
        <Row className="w-100">
          <Col md={12} lg={6} xl={4} className="mx-auto">
            <Row className="g-2">
              <Col xs={12}>
                <button onClick={() => handleSetUserType("start-up")} className={`mx-auto ${styles.formButton}`}>
                  <span>Start-Up</span>
                  <FeatherIcon icon="arrow-right" size={18} />
                </button>
              </Col>
              <Col xs={12}>
                <button onClick={() => handleSetUserType("corporate")} className={`mx-auto ${styles.formButton}`}>
                  <span>Corporate</span>
                  <FeatherIcon icon="arrow-right" size={18} />
                </button>
              </Col>
              <Col xs={12}>
                <Link to="/register" className={`mx-auto ${styles.formButton}`}>
                  <span>SME</span>
                  <FeatherIcon icon="arrow-right" size={18} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </FlexContainer>
    </div>
  );
};

export default Login;
