import {Container } from "react-bootstrap";
import Setting from "Screens/User/Setting/Components/Setting"

const Profile = () => {
  return (
    <div className="page__wrapper">
      <Container fluid className="px-5">
        <div className="d-flex gap-4 align-items-center mb-5">
          <div className={`page-title mb-0`} style={{ cursor: "pointer" }}>
            Profile
          </div>
        </div>
        <Setting />
      </Container>
    </div>
  );
};

export default Profile;
