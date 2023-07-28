import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const Navbar = () => {
  const [menuToggler, setMenuToggler] = useState(false);
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Container fluid className="px-5">
        <nav>
          <div className={styles.menuWapper}>
            {/* <div className="logo"></div> */}
            <div
              className={styles.respTOggler}
              onClick={() => setMenuToggler(true)}
            >
              <FeatherIcon icon="menu" size={26} />
            </div>
            <ul className={`${styles.menus} ${menuToggler && styles.active}`}>
              <li
                className={styles.menuCloser}
                onClick={() => setMenuToggler(false)}
              >
                <FeatherIcon icon="x" size={26} />
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard" && styles.active
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/data-room"
                  className={
                    location.pathname === "/data-room" && styles.active
                  }
                >
                  Data Room
                </Link>
              </li>
              <li>
                <Link
                  to="/cap-table"
                  className={
                    location.pathname === "/cap-table" && styles.active
                  }
                >
                  Cap Table
                </Link>
              </li>
              <li>
                <Link
                  to="/funding"
                  className={location.pathname === "/funding" && styles.active}
                >
                  Funding
                </Link>
              </li>
              <li>
                <Link
                  to="/investor-list"
                  className={location.pathname === "/investor-list" && styles.active}
                >
                  Investor List
                </Link>
              </li>
              <li>
                <Link to="/">Deal Room</Link>
              </li>
            </ul>
          </div>
          <div className={styles.options}>
            <ul className={styles.optionList}>
              <li>
                <button className={styles.iconButton}>
                  <FeatherIcon icon="bell" size={20} />
                  <span class="position-absolute bg-danger rounded-circle alert-badge">
                    1
                  </span>
                </button>
              </li>
              <li>
                <button className={`${styles.iconButton} ${styles.logout}`}>
                  <FeatherIcon icon="log-out" size={20} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
