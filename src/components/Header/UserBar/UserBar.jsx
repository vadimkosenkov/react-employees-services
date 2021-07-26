import React from "react";
import { withRouter } from "react-router";
import s from "./UserBar.module.scss";
import { getFromLocalStorage } from "./../../../utilities/utilities.js";

function UserBar(props) {
  const userInfo = getFromLocalStorage("userInfo");

  const logOut = () => {
    localStorage.removeItem("userInfo");
    props.history.push("/auth");
  };
  return (
    <div className={s.headerUserBar}>
      <div className={s.headerMessage}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.22697 15.7828L4.68726 15.9781L4.79566 15.7226L4.63614 15.4955L4.22697 15.7828ZM3 18.675L2.53971 18.4797L2.18801 19.3087L3.07762 19.1689L3 18.675ZM6.74111 18.0871L6.99868 17.6586L6.84297 17.565L6.66349 17.5932L6.74111 18.0871ZM20.5 12C20.5 15.7845 16.7837 19 12 19V20C17.1575 20 21.5 16.4998 21.5 12H20.5ZM12 5C16.7837 5 20.5 8.21549 20.5 12H21.5C21.5 7.50024 17.1575 4 12 4V5ZM3.5 12C3.5 8.21549 7.21635 5 12 5V4C6.84252 4 2.5 7.50024 2.5 12H3.5ZM4.63614 15.4955C3.91021 14.4618 3.5 13.2683 3.5 12H2.5C2.5 13.491 2.98385 14.8828 3.8178 16.0702L4.63614 15.4955ZM3.46029 18.8703L4.68726 15.9781L3.76668 15.5876L2.53971 18.4797L3.46029 18.8703ZM6.66349 17.5932L2.92238 18.1811L3.07762 19.1689L6.81873 18.581L6.66349 17.5932ZM12 19C10.1252 19 8.39819 18.4997 6.99868 17.6586L6.48355 18.5157C8.04262 19.4527 9.94841 20 12 20V19Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={s.headerUserInfo}>
        <img
          src={userInfo?.src}
          width="28"
          height="28"
          alt="icon: user avatar"
        />
        <div>{userInfo?.name}</div>
      </div>
      <div className={s.headerTurnOff} onClick={logOut}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.79428 6.85103C6.71232 6.93735 6.63251 7.02584 6.55494 7.11641C6.41575 7.27892 6.28378 7.44814 6.15954 7.62352C5.34064 8.77947 4.85742 10.2035 4.85742 11.7437C4.85742 15.6097 7.90189 18.7437 11.6574 18.7437C15.413 18.7437 18.4574 15.6097 18.4574 11.7437C18.4574 9.77289 17.6662 7.99229 16.393 6.72016M11.6574 5V9"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default withRouter(UserBar);
