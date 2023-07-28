import Paginations from "Components/Pagination/Paginations";
import React from "react";
import { Form, Table } from "react-bootstrap";

const InvertorsDocuments = () => {
  return (
    <>
      <div className="mb-5 text-center text-danger">
        <p>Please ensure you have selected Pitch deck!</p>
        <p>
          If you would like to add more documents please upload via Document Tab
        </p>
      </div>
      <Table responsive className="table-v__align-center ">
        <thead>
          <tr>
            <td className="table-dark col-5">File name</td>
            <td className="table-dark col-2">File size</td>
            <td className="table-dark col-2">Date uploaded</td>
            <td className="table-dark col-2">Category</td>
            <td className="table-dark col-2">Uploaded by</td>
            <td className="col-1"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <Form.Check type="switch" id="" checked />
                <div>
                  <div>Dashboard</div>
                  <span className="text-grey fs-xs">720 KB</span>
                </div>
              </div>
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
              <div className="text-grey">Olivia Rhye</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <Form.Check type="switch" id="" checked />
                <div>
                  <div>Dashboard</div>
                  <span className="text-grey fs-xs">720 KB</span>
                </div>
              </div>
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
              <div className="text-grey">Olivia Rhye</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <Form.Check type="switch" id="" checked />
                <div>
                  <div>Dashboard</div>
                  <span className="text-grey fs-xs">720 KB</span>
                </div>
              </div>
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
              <div className="text-grey">Olivia Rhye</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <Form.Check type="switch" id="" checked />
                <div>
                  <div>Dashboard</div>
                  <span className="text-grey fs-xs">720 KB</span>
                </div>
              </div>
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
              <div className="text-grey">Olivia Rhye</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-3">
                <Form.Check type="switch" id="" checked />
                <div>
                  <div>Dashboard</div>
                  <span className="text-grey fs-xs">720 KB</span>
                </div>
              </div>
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
              <div className="text-grey">Olivia Rhye</div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Paginations />
    </>
  );
};

export default InvertorsDocuments;
