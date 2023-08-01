import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import styles from "Styles/Style.module.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import Paginations from "Components/Pagination/Paginations";
import { Link } from "react-router-dom";

const CapTable = () => {
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="page-title">Cap Table</div>
        <div className="page-content">
          <div className={styles.tableOptions}>
            <Row>
              <Col sm={12} md={9}>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link to='/cap-table/new-shareholder' className="btn btn-dark fs-sm px-3 py-2">Add</Link>
                  <button className="btn fs-sm px-3 py-2">Download</button>
                </div>
              </Col>
            </Row>
          </div>
          <Table responsive className="fs-sm">
            <thead>
              <tr>
                <td className="table-dark col-4">File name</td>
                <td className="table-dark col-1">Equity</td>
                <td className="table-dark col-1">Shares (nos)</td>
                <td className="table-dark col-2">Estimated Value</td>
                <td className="table-dark col-1">Security</td>
                <td className="table-dark col-1">Holder</td>
                <td className="table-dark col-1">Notes</td>
                <td className="col-1"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="text-decoration-underline">Olivia Rhye</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="success-badge">CE</span>
                </td>
                <td>
                  <span className="success-badge">Founder</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="info-badge">PSE</span>
                </td>
                <td>
                  <span className="success-badge">Founder</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="purple-badge">V Debt</span>
                </td>
                <td>
                  <span className="success-badge">Founder</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="pink-badge">Warrant</span>
                </td>
                <td>
                  <span className="pink-badge">Employee</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="dark-badge">SAFE</span>
                </td>
                <td>
                  <span className="danger-badge">Employee</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="dark-badge">Convertible</span>
                </td>
                <td>
                  <span className="dark-badge">Advisor</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-decoration-underline">Name</span>
                </td>
                <td>
                  <span className="text-grey">15%</span>
                </td>
                <td>100</td>
                <td>
                  <span className="text-grey">$500</span>
                </td>
                <td>
                  <span className="warning-badge">Options</span>
                </td>
                <td>
                  <span className="warning-badge">Angel</span>
                </td>
                <td>
                  <span className="text-grey">ABCD</span>
                </td>
                <td className="text-center">
                  <Link to="/cap-table/edit-shareholder" className="text-purple">
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Paginations />
      </Container>
    </div>
  );
};

export default CapTable;
