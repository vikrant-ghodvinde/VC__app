import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const FundingRoundModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="modal__close--btn" onClick={() => setShow(false)}>
          <FeatherIcon icon="x" size={14} strokeWidth={4} color="#fff" />
        </div>
        <div className="d-flex align-items-center justify-content-between flex-column flex-md-row gap-4 mt-5">
            <span>Add more funding round?</span>
            <button className="btn btn-dark">ADD</button>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-dark">Save and Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default FundingRoundModal;
