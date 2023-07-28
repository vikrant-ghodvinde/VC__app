import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import styles from "Styles/Style.module.css";
import formStyle from "Styles/FormControl.module.css";
import UploadDocument from "./Components/UploadDocument";
import Paginations from "Components/Pagination/Paginations";

const DataRoom = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="page-title">Documents</div>
        <div className="text-center text-danger mb-4 fs-xs">
          These are the document that you can send to Investor when applying for
          funding. Please ensure you attach only Pitch Deck unless further
          documents are requested by Investor.
        </div>
        <div className="page-content">
          <div className={styles.tableOptions}>
            <Row>
              <Col sm={12} md={9}>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <button
                    className="btn btn-dark fs-sm px-3 py-2"
                    onClick={() => setShow(true)}
                  >
                    <FeatherIcon icon="upload-cloud" size={16} /> Upload
                  </button>
                  <button className="btn fs-sm px-3 py-2">Download all</button>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div className={formStyle.searchBox}>
                  <span>
                    <FeatherIcon icon="search" size={20} />
                  </span>
                  <input type="text" name="" id="" placeholder="Search" />
                </div>
              </Col>
            </Row>
          </div>
          <Table responsive className="fs-sm">
            <thead>
              <tr>
                <td className="table-dark col-5">File name</td>
                <td className="table-dark col-2">File size</td>
                <td className="table-dark col-2">Date uploaded</td>
                <td className="table-dark col-2">Category</td>
                <td className="col-1"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>Dashboard</div>
                  <div className="text-grey fs-xs">720 KB</div>
                </td>
                <td>
                  <div className="text-grey">200 KB</div>
                </td>
                <td>
                  <div>Jan 4, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Investment Memo</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Dashboard screenshot.jpg</div>
                  <div className="text-grey fs-xs">720 KB</div>
                </td>
                <td>
                  <div className="text-grey">200 KB</div>
                </td>
                <td>
                  <div>Jan 4, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Financial</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Dashboard prototype recording.mp4</div>
                  <div className="text-grey fs-xs">16 MB</div>
                </td>
                <td>
                  <div className="text-grey">16 MB</div>
                </td>
                <td>
                  <div>Jan 2, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Legal</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Dashboard prototype FINAL.fig</div>
                  <div className="text-grey fs-xs">4.2 MB</div>
                </td>
                <td>
                  <div className="text-grey">4.2 MB</div>
                </td>
                <td>
                  <div>Jan 6, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Pitch Deck</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>UX Design Guidelines.docx</div>
                  <div className="text-grey fs-xs">400 KB</div>
                </td>
                <td>
                  <div className="text-grey">400 KB</div>
                </td>
                <td>
                  <div>Jan 8, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Investor Consent</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Dashboard interaction.framerx</div>
                  <div className="text-grey fs-xs">12 MB</div>
                </td>
                <td>
                  <div className="text-grey">12 MB</div>
                </td>
                <td>
                  <div>Jan 6, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Legal</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>App inspiration.png</div>
                  <div className="text-grey fs-xs">800 KB</div>
                </td>
                <td>
                  <div className="text-grey">800 KB</div>
                </td>
                <td>
                  <div>Jan 6, 2022</div>
                </td>
                <td>
                  <div className="text-grey">Letter of Intent</div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="download-cloud" size={18} />
                    </button>
                    <button className="btn border-0 p-0 text-grey-hover">
                      <FeatherIcon icon="trash-2" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Paginations />
      </Container>
      <UploadDocument show={show} setShow={setShow} />
    </div>
  );
};

export default DataRoom;
