import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Modal } from "react-bootstrap";

const ErrorModal = ({ show, setShow, message }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="modal__close--btn" onClick={() => setShow(false)}>
          <FeatherIcon icon="x" size={14} strokeWidth={4} color="#fff" />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column gap-5">
          <p className="text-danger">Error</p>
          <span>{message ? message : "Opps Something went wrong"}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorModal;
