import React from "react";

const SortingDropdown = () => {
  return (
    <div className="dropdown__onstatus">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Status
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#!">
              Pending
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Unsuccessful
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Initial Communication
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Due Diligence (Workspace)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Investment Committee
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Syndicate
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Funded
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Exit
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingDropdown;
