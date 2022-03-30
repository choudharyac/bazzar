import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  const inputHandler = (event) => {
    props.onHandleChange(event);
  };
  return (
    <div className={`form-group ${classes.formGroup}`}>
      <input
        type={props.type}
        className={`form-control ${classes.formInput} ${
          props.errors[props.name] ? " input-error" : ""
        }`}
        placeholder={props.placeholder}
        name={props.name}
        onChange={inputHandler}
      />
      {props.errors[props.name] && (
        <span className={`${classes.error}`}>{props.errors[props.name]}</span>
      )}
      {/* <label htmlFor={props.id} className={classes.label}>
        {props.label}
      </label> */}
    </div>
  );
};

export default React.memo(Input);
