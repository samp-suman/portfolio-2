import React from "react";

const TogglerButton = (props) => {
  let buttonClasses = "mi-header-toggler";
  let iconClasses = "lni-menu size-md";
  if (props.sideDrawerOpen) {
    buttonClasses = "mi-header-toggler is-visible";
    iconClasses = "lni-close size-md";
  }
  return (
    <button onClick={props.onToggle} className={buttonClasses}>
      <i className={iconClasses}></i>
    </button>
  );
};

export default TogglerButton;
