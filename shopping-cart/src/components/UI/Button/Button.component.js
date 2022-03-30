import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className="form-group">
      <button
        type={props.type}
        onClick={props.onFormSubmission}
        disabled={
          (props.formType === "register" &&
            Object.keys(props.values).length !== 5) ||
          (props.formType === "login" && Object.keys(props.values).length !== 2)
            ? true
            : false
        }
        className={`btn btn-block ${classes.btn}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default React.memo(Button);
