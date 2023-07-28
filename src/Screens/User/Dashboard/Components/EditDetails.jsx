import React from "react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const EditDetails = () => {
  return (
    <Row className="gy-5 mt-4">
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Company Name
              </label>
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                ABN
              </label>
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input type="email" name="" id="" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Number of employee
              </label>
              <Col xs={12} sm={6} md={3}>
                <input type="text" name="" id="" />
              </Col>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Industry Type (e.g FinTech)
              </label>
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Address
              </label>
              <textarea name="" id=""></textarea>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className={`${formStyle.labelText}`}>Point of Contact</div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Name
              </label>
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Role (Founder/Co-Founder)
              </label>
              <input type="text" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Phone
              </label>
              <input type="number" name="" id="" />
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <label htmlFor="" className={formStyle.labelText}>
                Email
              </label>
              <input type="email" name="" id="" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-4">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/facebook.png"
                  alt="facebook"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/twitter.png"
                  alt="twitter"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/instagram.png"
                  alt="instagram"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/linkedin.png"
                  alt="linkedin"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/tiktok.png"
                  alt="tiktok"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/youtube.svg"
                  alt="youtube"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <div className={formStyle.formFlex}>
                <img
                  src="/assets/images/icons/internet.png"
                  alt="internet"
                  className="img-fluid"
                />
                <input type="text" name="" id="" />
                <button className="btn p-0 border-0">
                  <FeatherIcon icon="copy" size={18} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-4">
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="">
                <option value="">Country</option>
              </select>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="">
                <option value="">State</option>
              </select>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.formGroup}>
              <select name="" id="">
                <option value="">City</option>
              </select>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EditDetails;
