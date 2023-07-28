import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Modal } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const MessageModal = ({ show, setShow }) => {
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <div className="modal__close--btn" onClick={() => setShow(false)}>
          <FeatherIcon icon="x" size={14} strokeWidth={4} color="#fff" />
        </div>
        <div className="mt-4">
          <div className={formStyle.formGroup}>
            <label htmlFor="" className={formStyle.labelText}>
              Comments
            </label>
            <textarea name="" id="" readOnly></textarea>
          </div>
        </div>
        <Modal.Footer>
          <button className="btn btn-dark"><FeatherIcon icon="send" size={16} /></button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default MessageModal;
