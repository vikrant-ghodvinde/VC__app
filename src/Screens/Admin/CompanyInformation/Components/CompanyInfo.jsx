import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const CompanyInfo = () => {
  return (
    <Row className="gy-5 mt-4">
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Company Name</p>
              <p className="m-0">Teseractsquat. pty ltd</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">ABN</p>
              <p className="m-0">123 456 789</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Phone</p>
              <p className="m-0">+61 470 309 719</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Email</p>
              <p className="m-0">pateltushar.v@outlook.com</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6} xl={3}>
        <Row className="g-2">
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Number of employee</p>
              <p className="m-0">4</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Industry Type (e.g FinTech)</p>
              <p className="m-0">Fintech</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Address</p>
              <p className="m-0">Unit 602, 96 North Tec Adelaide, SA 5000 </p>
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
            <div className="">
              <p className="m-0 text-grey">Name</p>
              <p className="m-0">Tushar Patel</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Role (Founder/Co-Founder)</p>
              <p className="m-0">Founder</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Phone</p>
              <p className="m-0">+61 470 309 719</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="">
              <p className="m-0 text-grey">Email</p>
              <p className="m-0">tusharp95@gmail.com</p>
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
                <div className="w-100">Link to facebook</div>
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
                <div className="w-100">Link to Twitter</div>
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
                <div className="w-100">@tusharvp</div>
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
                <div className="w-100">Link to LinkedIn</div>
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
                <div className="w-100">Link to Tiktok</div>
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
                <div className="w-100">Link to YT</div>
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
                <div className="w-100">Link to Website</div>
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
            <div className={formStyle.borderedBox}>
              <span className="text-grey">Country</span>
            </div>
          </Col>
          <Col xs={12}>
            <div className={formStyle.borderedBox}>
              <span className="text-grey">City</span>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CompanyInfo;
