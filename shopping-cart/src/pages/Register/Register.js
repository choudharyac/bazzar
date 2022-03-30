import { useHistory } from "react-router-dom";
import classes from "./Register.module.css";
import useForm from "../../hooks/useForm";
import Input from "../../components/UI/Input/Input.component";
import Button from "../../components/UI/Button/Button.component";
const Register = () => {
  const history = useHistory();
  const registrationHandler = (event) => {
    event.preventDefault();
    const validate = handleSubmit();
    if (!validate) {
      return;
    }
    history.push("/");
  };
  const { handleChange, values, errors, handleSubmit } =
    useForm(registrationHandler);

  return (
    <div className={classes.register}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={classes.title}>Signup</div>
          <div className={classes.info}>
            We do not share your personal details with anyone
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={registrationHandler}>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              onHandleChange={handleChange}
              errors={errors}
            />
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onHandleChange={handleChange}
              errors={errors}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onHandleChange={handleChange}
              errors={errors}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onHandleChange={handleChange}
              errors={errors}
            />
            <Input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onHandleChange={handleChange}
              errors={errors}
            />
            <Button type="submit" values={values} formType="register">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
