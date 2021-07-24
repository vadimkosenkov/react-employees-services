import React from "react";
import "./../../App";
import s from "./Auth.module.scss";
import {
  sendRequest,
  parseJwt,
  setToLocalStorage,
} from "../../utilities/utilities";
import { withRouter } from "react-router";

class Auth extends React.Component {
  state = {
    email: "",
    password: "",
  };

  login(e) {
    e.preventDefault();
    sendRequest(
      "https://nodejs-ps143.herokuapp.com/auth/login",
      this.getLoginResponse,
      "POST",
      this.state
    );
  }

  getLoginResponse = (data, error) => {
    if (!error) {
      const tokenData = parseJwt(data.token.split(" ")[1]);
      setToLocalStorage("userInfo", tokenData);
      this.props.history.push("/");
    } else {
      alert("Email or password is incorrect. Please check and try again.");
    }
  };

  render() {
    return (
      <main className={s.main}>
        <div className={s.authBar}>
          <form
            action="#"
            onSubmit={(e) => this.login(e)}
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
                  this.state.email = event.target.value;
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
                  this.state.password = event.target.value;
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
  }
}

export default withRouter(Auth);
