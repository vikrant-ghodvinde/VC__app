import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { Col, Row } from "react-bootstrap";

const NotificationButton = () => {
  const [notificationToggle, setNotificationToggle] = useState(false);
  return (
    <div className={styles.notification__Wrapper}>
      <button
        className={styles.iconButton}
        onClick={() => setNotificationToggle(!notificationToggle)}
      >
        <FeatherIcon icon="bell" size={20} />
        <span class="position-absolute bg-danger rounded-circle alert-badge">
          1
        </span>
      </button>
      <div
        className={`${styles.notification__container} ${
          notificationToggle && styles.show
        }`}
      >
        <div className={styles.headings}>
          <h6 className="m-0">Notification</h6>
          <span className={styles.clearButton}>Clear All</span>
        </div>
        <Row className={`gy-3 ${styles.notifications__all}`}>
          <Col xs={12}>
            <div className={styles.notification_item}>
              <div className={styles.notification__Box}>
                You have New approval request from Abc Efg
              </div>
              <div className={styles.notification__options}>
                <span className={`${styles.clearButton} text-grey`}>Clear</span>
                <span className={styles.clearButton}>View</span>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={styles.notification_item}>
              <div className={styles.notification__Box}>
                You have New approval request from Abc Efg
              </div>
              <div className={styles.notification__options}>
                <span className={`${styles.clearButton} text-grey`}>Clear</span>
                <span className={styles.clearButton}>View</span>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className={styles.notification_item}>
              <div className={styles.notification__Box}>
                You have New approval request from Abc Efg
              </div>
              <div className={styles.notification__options}>
                <span className={`${styles.clearButton} text-grey`}>Clear</span>
                <span className={styles.clearButton}>View</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotificationButton;
