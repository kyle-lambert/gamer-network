import React from "react";
import "./ModalClose.scss";

import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import Icon from "../../shared/Icon/Icon";

function ModalClose(props) {
  return (
    <button className="ModalClose">
      <Icon>
        <CloseIcon />
      </Icon>
    </button>
  );
}

export default ModalClose;
