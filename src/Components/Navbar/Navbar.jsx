import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import {useSelector} from 'react-redux'
import NotificationButton from "./Components/NotificationButton";
const Navbar = () => {
  const [menuToggler, setMenuToggler] = useState(false);
  const location = useLocation();
  const {typeOfUser} = useSelector((state) => state.userType)
  const [userType, setUserType] = useState(() => {
    const savedUserType = localStorage.getItem("userType");
    return savedUserType ? JSON.parse(savedUserType) : null;
  });
 
  return (
    <header className={location.pathname === "/" || location.pathname === "/admin-stage" || location.pathname === "/admin-login" || location.pathname === "/startup-login" || location.pathname === "/admin-register" || location.pathname === "/admin-fundtype" || location.pathname === "/admin-invest-in-country" || location.pathname === "/admin-industry" || location.pathname === "/select-country" || location.pathname === "/funding/previous-funding-round" || location.pathname === "/register" || location.pathname === "/cap-table/new-shareholder" || location.pathname === "/cap-table/edit-shareholder" || location.pathname === "/apply-investor" || location.pathname === "/investor-list/invertor-funding" || location.pathname === "/investor-list/invertor-funding/document" || location.pathname === "/investor-list/invertor-funding/summary" || location.pathname === "/funding/new-funding-shareholder" ? styles.hide : styles.header}>
      <Container fluid className="px-5">
        <nav>
          <div className={styles.menuWapper}>
            <div
              className={styles.respTOggler}
              onClick={() => setMenuToggler(true)}
            >
              <FeatherIcon icon="menu" size={26} />
            </div>
            {
              typeOfUser === "start-up" && <ul className={`${styles.menus} ${menuToggler && styles.active}`}>
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
              </ul>
            }
            {
              typeOfUser === "corporate" && <ul className={`${styles.menus} ${menuToggler && styles.active}`}>
                <li
                  className={styles.menuCloser}
                  onClick={() => setMenuToggler(false)}
                >
                  <FeatherIcon icon="x" size={26} />
                </li>
                <li>
                  <Link
                    to="/admin"
                    className={
                      location.pathname === "/admin" || location.pathname === "/admin-company"
                        ? styles.active
                        : ""
                    }
                  >
                    Application
                  </Link>

                </li>
                <li>
                  <Link
                    to="/admin-setting"
                    className={
                      location.pathname === "/admin-setting" && styles.active
                    }
                  >
                    Setting
                  </Link>
                </li>
              </ul>
            }
          </div>
          <div className={styles.options}>
            <ul className={styles.optionList}>
              <li>
                <NotificationButton />
              </li>
              <li>
                {
                  location.pathname !== "/admin-company" && <Link to='/' className={`${styles.iconButton} ${styles.logout}`}>
                  <FeatherIcon icon="log-out" size={20} />
                </Link>
                }
                {
                  location.pathname === '/admin-company' && <Link to='/admin' className={`${styles.iconButton} ${styles.logout}`}>
                  <FeatherIcon icon="arrow-left" size={20} /> Back
                </Link>
                }
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
