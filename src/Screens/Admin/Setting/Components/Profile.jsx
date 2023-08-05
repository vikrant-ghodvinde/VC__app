import ChangeSettingModal from "Components/ChangeSettingModal/ChangeSettingModal";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const Profile = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Row>
        <Col md={12} lg={6}>
          <Row className="gy-4">
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={`${formStyle.labelText} d-flex align-items-center gap-3 flex-wrap cursor-pointer`}>
                  Account Email <span className="text-decoration-underline text-black" onClick={() => setShow(true)}>Change</span>
                </label>
                <p className="m-0">Tushar.patel@whatever.com</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={`${formStyle.labelText} d-flex align-items-center gap-3 flex-wrap cursor-pointer`}>
                  Name of the Fund <span className="text-decoration-underline text-black" onClick={() => setShow(true)}>Change</span>
                </label>
                <p className="m-0">Tushar.patel@whatever.com</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={`${formStyle.labelText} d-flex align-items-center gap-3 flex-wrap cursor-pointer`}>
                  Present password <span className="text-decoration-underline text-black" onClick={() => setShow(true)}>Change</span>
                </label>
                <p className="m-0">********************</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <ChangeSettingModal show={show} setShow={setShow} />
    </>
  );
};

export default Profile;
