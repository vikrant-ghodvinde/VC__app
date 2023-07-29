import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const All = () => {
  const navigate = useNavigate()
  return (
    <>
      <Table responsive className="fs-sm">
        <thead>
          <tr>
            <td className="table-dark col-4">Name of Company</td>
            <td className="table-dark col-1">Sector</td>
            <td className="table-dark col-2">Stage of Investment</td>
            <td className="table-dark col-1">Date Rec</td>
            <td className="table-dark col-2">Comments</td>
            <td className="table-dark col-1">Application</td>
            <td className="table-dark col-1"></td>
          </tr>
        </thead>
        <tbody>
          <tr style={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
          <tr tyle={{cursor:"pointer"}} onClick={() => navigate('/admin-company')}>
            <td>
              <div>ASG</div>
              <div className="text-grey fs-xs">olivia@untitledui.com</div>
            </td>
            <td>
              <span className="success-badge">FinTech</span>
            </td>
            <td>
              <div>
                <span className="success-badge">Seed</span>
              </div>
            </td>
            <td>
              <div className="text-grey">11/12/2022</div>
            </td>
            <td>
              <div className="text-grey">ABCD</div>
            </td>
            <td>
              <span className="dark-badge">Globally</span>
            </td>
            <td>
              <button className="table__btn-apply">Apply</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default All;
