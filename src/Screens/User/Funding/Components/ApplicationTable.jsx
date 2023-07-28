import Paginations from "Components/Pagination/Paginations";
import React from "react";
import { Table } from "react-bootstrap";

const ApplicationTable = () => {
  return (
    <>
      <Table responsive className="fs-sm">
        <thead>
          <tr>
            <td className="table-dark">Fund name</td>
            <td className="table-dark text-center">Type</td>
            <td className="table-dark text-center">Country they invest in</td>
            <td className="table-dark text-center">Application Status</td>
            <td className="table-dark text-center">Application</td>
            <td className="table-dark text-center">Date Applied</td>
            <td className="table-dark text-center"></td>
          </tr>
        </thead>
        <tbody className="text-center">
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Olivia Rhye</span>
                    </div>
                </td>
                <td><span className="dark-badge">VC</span></td>
                <td><span className="dark-badge">Globally</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Started</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="dark-badge">VC</span></td>
                <td><span className="dark-badge">Australia</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Started</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="dark-badge">VC</span></td>
                <td><span className="dark-badge">Australia</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Applied</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="dark-badge">VC</span></td>
                <td><span className="dark-badge">India</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Applied</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="success-badge">Angle Syndicate</span></td>
                <td><span className="success-badge">USA</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Applied</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="info-badge">Family Office</span></td>
                <td><span className="info-badge">USA</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Applied</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel">Cancel</button></td>
            </tr>
            <tr>
                <td>
                    <div className="table__has-image">
                        <img src="https://www.pngkit.com/png/detail/256-2564543_beautiful-website-and-internet-marketing-that-boosts-girl.png" alt="" />
                        <span className="text-decoration-underline">Name</span>
                    </div>
                </td>
                <td><span className="success-badge">Options</span></td>
                <td><span className="success-badge">USA</span></td>
                <td>Pending</td>
                <td><span className="dark-badge">Unsuccessful</span></td>
                <td>11/12/2020</td>
                <td><button className="table__btn-cancel" disabled>Cancel</button></td>
            </tr>
        </tbody>
      </Table>
      <Paginations />
    </>
  );
};

export default ApplicationTable;
