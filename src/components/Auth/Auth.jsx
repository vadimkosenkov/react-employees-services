import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "./../../actions/auth-action";
import "./../../App";
import s from "./Auth.module.scss";

const Auth = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

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

export default connect(mapStateToProps)(Auth);
