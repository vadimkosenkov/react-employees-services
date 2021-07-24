import React from "react";
import "./../../../App.scss";
import s from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { getFromLocalStorage } from "./../../../utilities/utilities.js";
import { withRouter } from "react-router";

class NavBar extends React.Component {
  userInfo = getFromLocalStorage("userInfo");

  componentWillMount() {
    this.currentRoute = this.props.location.pathname;
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.currentRoute = nextProps.location.pathname;
      return true;
    }
    return false;
  }

  render() {
    return (
      <nav className={s.nav}>
        <div className={s.navContainer}>
          <div className={this.currentRoute === "/" ? s.activeNavLink : ""}>
            <NavLink to="/">Address book</NavLink>
          </div>
          <div>
            <a>Leave request</a>
          </div>
          <div>
            <a>Desk booking</a>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.99818 5L0.535878 0.5L7.46047 0.5L3.99818 5Z"
                fill="#F6F8FD"
                fillOpacity="0.2"
              />
            </svg>
          </div>

          {this.userInfo?.role === "admin" ? (
            <div
              className={
                s.settingsHidden +
                " " +
                (this.currentRoute === "/roles" ? s.activeNavLink : "")
              }>
              <NavLink to="/roles">Settings</NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
