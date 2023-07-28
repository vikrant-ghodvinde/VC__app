import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CapTable = () => {
  return (
    <Table responsive className="fs-sm">
      <thead>
        <tr>
          <td className="table-dark col-4">File name</td>
          <td className="table-dark col-1">Equity</td>
          <td className="table-dark col-1">Shares (nos)</td>
          <td className="table-dark col-2">Estimated Value</td>
          <td className="table-dark col-1">Security</td>
          <td className="table-dark col-1">Holder</td>
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
        </tr>
      </tbody>
    </Table>
  );
};

export default CapTable;
