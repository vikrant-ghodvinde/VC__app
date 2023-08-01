import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import axios from "axios"; // Import axios for making API requests
import formStyle from "Styles/FormControl.module.css";

const UploadDocument = ({ show, setShow }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select a document to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("document", selectedFile);

      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for uploading documents
      const response = await axios.post("YOUR_API_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload successful:", response.data);
      // Do something with the response, such as showing a success message
    } catch (error) {
      console.error("Upload failed:", error);
      // Handle error, show error message, etc.
    }
  };

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
                      <option value="pich-desk">Pitch Deck</option>
                      <option value="investment-memo">Investment Memo</option>
                      <option value="financials">Financials</option>
                      <option value="legal">Legal</option> 
                      <option value="privacy-consent">Privacy & Consent</option> 
                      <option value="letter-of-intent">Letter of Intent</option> 
                      <option value="others">Others</option> 
                    </select>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className={formStyle.fileUpload}>
                    <span>Select Document</span>
                    <div className={formStyle.fileUploadPlus}>
                      <input
                        type="file"
                        name=""
                        id=""
                        onChange={handleFileChange}
                        accept=".pdf" // You can restrict accepted file types if needed
                      />
                      <span className={formStyle.icon}>
                        <FeatherIcon icon="plus-circle" size={22} />
                      </span>
                    </div>
                  </div>
                </Col>
                {selectedFile && (
                  <Col xs={12}>
                    <div>
                      <span>{selectedFile.name}</span>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={handleUpload}>
          Upload
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadDocument;
