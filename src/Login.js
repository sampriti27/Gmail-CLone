import React from "react";
import "./login.css";
import gmail from "./gmail.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src={gmail} alt="" />
        <Button
          variant="contained"
          color="primary"
          onClick={signIn}
          className="loginButton"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
