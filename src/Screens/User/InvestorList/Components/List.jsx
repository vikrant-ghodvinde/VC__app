import React from "react";
import styles from "Styles/Style.module.css";
import { Col, Form, Row, Table } from "react-bootstrap";
import Paginations from "Components/Pagination/Paginations";
import formStyle from "Styles/FormControl.module.css";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <div className={styles.tableOptions}>
        <Row>
          <Col sm={12} md={2}>
            <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>Sector</label>
                <select name="" id="">
                    <option value="">Sector</option>
                </select>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>Stage</label>
                <select name="" id="">
                    <option value="">Stage</option>
                </select>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>Type</label>
                <select name="" id="">
                    <option value="">Type</option>
                </select>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <div className={formStyle.formGroup}>
                <label htmlFor="" className={formStyle.labelText}>Country they Invest in</label>
                <select name="" id="">
                    <option value="">Country</option>
                </select>
            </div>
          </Col>
        </Row>
      </div>
      <Table responsive className="fs-sm">
        <thead>
          <tr>
            <td className="table-dark">Fund name</td>
            <td className="table-dark text-center">Sector</td>
            <td className="table-dark text-center">Stage of Investment</td>
            <td className="table-dark text-center">Type</td>
            <td className="table-dark text-center">Invest in</td>
            {/* <td className="table-dark text-center">Application Status</td> */}
            <td className="table-dark text-center">Notes</td>
            <td className="table-dark text-center">Shortlist</td>
            <td className="table-dark text-center"></td>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Olivia Rhye</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="dark-badge">VC</span>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/investor-list/invertor-funding' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="dark-badge">VC</span>
            </td>
            <td>
              <span className="dark-badge">Australia</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="dark-badge">VC</span>
            </td>
            <td>
              <span className="dark-badge">Australia</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="dark-badge">VC</span>
            </td>
            <td>
              <span className="dark-badge">India</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="success-badge">Angle Syndicate</span>
            </td>
            <td>
              <span className="success-badge">USA</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="info-badge">Family Office</span>
            </td>
            <td>
              <span className="info-badge">USA</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
          <tr>
            <td>
              <div className="table__has-image">
                <img
                  src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png"
                  alt=""
                />
                <span className="text-decoration-underline">Name</span>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <span className="purple-badge">Agnostic</span>
                <span className="info-badge">FinTech</span>
                <span className="indigo-badge">Label</span>
                <span className="dark-badge">+4</span>
              </div>
            </td>
            <td>
              <span className="success-badge">Options</span>
            </td>
            <td>
              <span className="success-badge">USA</span>
            </td>
            <td>Pending</td>
            <td>ABCD</td>
            <td>
              <Form.Check type="switch" id="" className="float-end" />
            </td>
            <td>
              <Link to='/apply-investor' className="table__btn-apply">Apply</Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Paginations />
    </>
  );
};

export default List;
