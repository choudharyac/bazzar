import { useState } from "react";

const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");

  const validate = (event, name, value) => {
    switch (name) {
      case "first_name":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            first_name: "First Name cannot be empty!",
          });
        } else {
          let newObj = delete errors["first_name"];
          setErrors(newObj);
        }
        break;
      case "last_name":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            last_name: "Last Name cannot be empty!",
          });
        } else {
          let newObj = delete errors["last_name"];
          setErrors(newObj);
        }
        break;
      case "loginPassword":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            loginPassword: "Password cannot be empty!",
          });
        } else {
          let newObj = delete errors["loginPassword"];
          setErrors(newObj);
        }
        break;
      case "email":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            email: "Email cannot be empty",
          });
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          setErrors({
            ...errors,
            email: "Please enter a valid email!",
          });
        } else {
          let newObj = delete errors["email"];
          setErrors(newObj);
        }
        break;
      case "password":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            password: "Password cannot be empty!",
          });
        } else if (value.length < 6) {
          setErrors({
            ...errors,
            password: "Minimum 6 letters are required!",
          });
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value)) {
          setErrors({
            ...errors,
            password:
              "Password should contain atleast one number, alphabets and no special characters are allowed!",
          });
        } else {
          setPassword(value);
          let newObj = delete errors["password"];
          setErrors(newObj);
        }
        break;
      case "confirm_password":
        if (value.trim() === "") {
          setErrors({
            ...errors,
            confirm_password: "Password cannot be empty!",
          });
        } else if (value !== password) {
          setErrors({
            ...errors,
            confirm_password: "Passwords do not match!",
          });
        } else {
          let newObj = delete errors["confirm_password"];
          setErrors(newObj);
        }
        break;
      default: {
        break;
      }
    }
  };
  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.preventDefault();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
