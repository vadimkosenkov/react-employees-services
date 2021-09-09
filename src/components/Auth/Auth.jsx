import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./../../App";
import s from "./Auth.module.scss";
import {
  parseJwt,
  setToLocalStorage,
  showAlert,
} from "./../../utilities/utilities.js";
import { authAction } from "./../../toolkitSlice/authSlice";

function logIn(e, post) {
  e.preventDefault();

  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://nodejs-ps143.herokuapp.com/auth/login",
        {
          body: JSON.stringify(post),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      const tokenData = parseJwt(json.token.split(" ")[1]);
      setToLocalStorage("userInfo", tokenData);
      dispatch(authAction(true));
    } catch (e) {
      dispatch({ type: "LOG_IN", payload: false });
      dispatch(
        showAlert("Email or password is incorrect. Please check and try again.")
      );
    }
  };
}

const Auth = (props) => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (props?.isAuthenticated) {
      history.push("/");
    }
  }, [props.isAuthenticated]);

  return (
    <main className={s.main}>
      <div className={s.authBar}>
        <form
          action="#"
          onSubmit={(e) => dispatch(logIn(e, authData))}
          className={s.authForm}>
          <div className={s.authInputContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="11.5" r="7" stroke="#DAE1E8" />
              <path
                d="M15.792 16.6538L19.6269 19.869"
                stroke="#DAE1E8"
                strokeLinecap="round"
              />
            </svg>
            <input
              name="email"
              className={s.authInput + " " + s.email}
              type="input"
              placeholder="Email"
              required
              onChange={(event) => {
                setAuthData({ ...authData, email: event.target.value });
              }}
            />
          </div>
          <div className={s.authInputContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="11.5" r="7" stroke="#DAE1E8" />
              <path
                d="M15.792 16.6538L19.6269 19.869"
                stroke="#DAE1E8"
                strokeLinecap="round"
              />
            </svg>
            <input
              name="password"
              className={s.authInput + " " + s.password}
              type="input"
              placeholder="Password"
              required
              onChange={(event) => {
                setAuthData({ ...authData, password: event.target.value });
              }}
            />
          </div>
          <button type="submit" className={s.authLogInBtn}>
            Log In
          </button>
        </form>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

Auth.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Auth);
