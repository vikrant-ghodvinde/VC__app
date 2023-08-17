import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const DataRoom = () => {
  return (
    <Row>
      <Col md={12} lg={6}>
        <div>
          <label htmlFor="" className={formStyle.labelText}>
            Stage of Funding
          </label>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Form.Check type="checkbox" id="" label="Angle" />
            <Form.Check type="checkbox" id="" label="Pre-Seed" />
            <Form.Check type="checkbox" id="" label="Seed" checked />
            <Form.Check type="checkbox" id="" label="Series" />
            <Form.Check type="checkbox" id="" label="IPO" />
          </div>
        </div>
        <Row className="mt-4 gy-3">
          <Col xs={12}>
            <label htmlFor="" className={formStyle.labelText}>
              Amount to Raise
            </label>
            <div className="d-flex align-items-center gap-5">
              <span>$120,000</span>
              <span>USD</span>
            </div>
          </Col>
          <Col xs={12}>
            <label htmlFor="" className={formStyle.labelText}>
              Valuation
            </label>
            <div className="d-flex align-items-center gap-5">
              <span>$1,000,000</span>
              <span>USD</span>
            </div>
          </Col>
          <Col xs={12}>
            <label htmlFor="" className={formStyle.labelText}>
              Equity Offered
            </label>
            <div className="d-flex align-items-center gap-5">
              <span>25%</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={12} lg={6}>
        <div className={formStyle.formGroup}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <label htmlFor="">
              Comments
            </label>
            <span className="text-decoration-underline cursor-pointer">
              Change
            </span>
          </div>
          <textarea name="" id=""></textarea>
        </div>
      </Col>
      <Col md={12} lg={12}>
        <Row>
          <Col md={12} lg={6}>
            <div className="mt-5">
              <label htmlFor="" className={formStyle.labelText}>
                Documents Attached
              </label>
              <div className="fixed-table-box">
                <Table responsive className="table-v__align-center ">
                  <thead>
                    <tr>
                      <td className="table-dark col-8">File name</td>
                      <td className="table-dark col-3">Category</td>
                      <td className="table-dark col-1"></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Dashboard</div>
                        <div className="text-grey fs-xs">720 KB</div>
                      </td>
                      <td>Investment Memo</td>
                      <td>
                        <div className="text-end">
                          <button className="btn p-0">
                            <FeatherIcon icon="download-cloud" size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="mt-5">
              <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>
                  Comments
                </label>
                <textarea name="" id="" readOnly></textarea>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DataRoom;
