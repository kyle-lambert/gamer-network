import React from "react";
import "./LandingPage.scss";

import LoginModal from "../../components/modals/LoginModal/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal/SignUpModal";

function LandingPage(props) {
  const [loginModal, setLoginModal] = React.useState(true);

  const toggleModal = () => setLoginModal((prev) => !prev);

  return (
    <div className="LandingPage">
      {loginModal ? (
        <LoginModal toggleModal={toggleModal} />
      ) : (
        <SignUpModal toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default LandingPage;
