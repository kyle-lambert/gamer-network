import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LandingPage.scss";

import { initialiseModalReducer } from "../../store/actions/modalActions";

import LoginModal from "../../components/modals/LoginModal/LoginModal";
import SignUpModal from "../../components/modals/SignUpModal/SignUpModal";

function LandingPage(props) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.modalReducer.isLogin);

  React.useEffect(() => {
    return () => dispatch(initialiseModalReducer());
  }, [dispatch]);

  return <div className="LandingPage">{isLogin ? <LoginModal /> : <SignUpModal />}</div>;
}

export default LandingPage;
