import Input from "../../components/UI/Input/Input.component";
import Button from "../../components/UI/Button/Button.component";
import useForm from "../../hooks/useForm";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const loginHandler = () => {
    const validate = handleSubmit();

    if (!validate) {
      return;
    }
    history.push("/");
  };
  const { handleChange, values, errors, handleSubmit } = useForm(loginHandler);

  return (
    <div className={classes.login}>
      <div className="row">
        <div className="col-md-6">
          <div className={classes.title}>Signup</div>
          <div className={classes.info}>
            We do not share your personal details with anyone
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={loginHandler}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              errors={errors}
              onHandleChange={handleChange}
            />
            <Input
              type="password"
              name="loginPassword"
              placeholder="Password"
              label="Password"
              errors={errors}
              onHandleChange={handleChange}
            />
            <Button type="submit" values={values} formType="login">
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
