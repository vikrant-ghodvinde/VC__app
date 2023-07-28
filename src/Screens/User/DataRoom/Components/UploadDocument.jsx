import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const UploadDocument = ({ show, setShow }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="modal__close--btn" onClick={() => setShow(false)}>
          <FeatherIcon icon="x" size={14} strokeWidth={4} color="#fff" />
        </div>
        <div className="modal__heading--wrap">Upload Document</div>
        <div className="modal__content--wrap">
          <Row>
            <Col md={8} className="mx-auto">
              <Row className="gy-4">
                <Col xs={12}>
                  <div className={formStyle.formGroup}>
                    <label htmlFor="" className="mb-1">
                      Category
                    </label>
                    <select name="" id="">
                      <option value="">Document Category</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.fileUpload}>
                    <span>Select Document</span>
                    <div className={formStyle.fileUploadPlus}>
                      <input type="file" name="" id="" />
                      <span className={formStyle.icon}>
                        <FeatherIcon icon="plus-circle" size={22} />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div>
                    <span>XYZ.pdf</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success">Upload</button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadDocument;
