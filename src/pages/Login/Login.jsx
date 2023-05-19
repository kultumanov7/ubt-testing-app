import { FormItem, Image, List } from "@components/common";
import "./Login.scss";
import { useSelector } from "react-redux";
import { LoginFooter, LoginForm } from "@components/feature";

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <>
      {!isLoading ? (
        <div className="login">
          <Image name="stp-logo" alt="stp-logo" className="stp-logo" />
          <LoginForm />
          <LoginFooter />
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
};

export default Login;
