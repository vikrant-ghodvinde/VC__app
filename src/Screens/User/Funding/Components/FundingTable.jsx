import React from "react";
import styles from "Styles/Style.module.css";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const FundingTable = () => {
  return (
    <>
      <div className={styles.tableOptions}>
        <Row>
          <Col sm={12} md={12}>
            <div className="d-flex align-items-center justify-content-end gap-3 flex-wrap">
              <Link to='/investor-list' className="btn btn-dark fs-sm px-3 py-2" >
                New Round
              </Link>
              <Link to='/funding/previous-funding-round' className="btn fs-sm px-3 py-2">
                Add Previous Round
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <Table
        responsive
        className="table-dark table-v__align-center table-has__row-gap"
      >
        <tbody>
          <tr>
            <td className="col-2 ">
              <div>
                <span className="text-light-grey fs-xs">Funding Stage</span>
                <p className="m-0">Series B</p>
              </div>
            </td>
            <td className="col-2">
              <div>
                <span className="text-light-grey fs-xs">Funding Target</span>
                <p className="m-0">$200,000</p>
              </div>
            </td>
            <td className="col-7">
              <span className="purple-badge">In Progress</span>
            </td>
            <td className="col-1">
              <button className="btn btn-white w-100">View</button>
            </td>
          </tr>
          <tr>
            <td className="col-2 ">
              <div>
                <span className="text-light-grey fs-xs">Funding Stage</span>
                <p className="m-0">Series B</p>
              </div>
            </td>
            <td className="col-2">
              <div>
                <span className="text-light-grey fs-xs">Funding Target</span>
                <p className="m-0">$200,000</p>
              </div>
            </td>
            <td className="col-7">
              <span className="pink-badge">Applied</span>
            </td>
            <td className="col-1">
              <button className="btn btn-white w-100">View</button>
            </td>
          </tr>
          <tr>
            <td className="col-2 ">
              <div>
                <span className="text-light-grey fs-xs">Funding Stage</span>
                <p className="m-0">Series B</p>
              </div>
            </td>
            <td className="col-2">
              <div>
                <span className="text-light-grey fs-xs">Funding Target</span>
                <p className="m-0">$200,000</p>
              </div>
            </td>
            <td className="col-7">
              <span className="success-badge">Completed</span>
            </td>
            <td className="col-1">
              <button className="btn btn-white w-100">View</button>
            </td>
          </tr>
          <tr>
            <td className="col-2 ">
              <div>
                <span className="text-light-grey fs-xs">Funding Stage</span>
                <p className="m-0">Series B</p>
              </div>
            </td>
            <td className="col-2">
              <div>
                <span className="text-light-grey fs-xs">Funding Target</span>
                <p className="m-0">$200,000</p>
              </div>
            </td>
            <td className="col-7">
              <span className="warning-badge">Cancelled</span>
            </td>
            <td className="col-1">
              <button className="btn btn-white w-100">View</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default FundingTable;
