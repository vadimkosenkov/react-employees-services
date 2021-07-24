import React, { useState, useEffect } from "react";
import "./../../App.scss";
import s from "./Header.module.scss";
import Title from "./Title/Title.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import UserBar from "./UserBar/UserBar.jsx";

const Header = (props) => {
  const [isAuthRoute, setIsAuthRoute] = useState(false);

  useEffect(() => {
    if (props.location.pathname === "/auth") {
      setIsAuthRoute(true);
    } else if (props.location.pathname !== "/auth") {
      setIsAuthRoute(false);
    } else {
      setIsAuthRoute(false);
    }
  });

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Title />
        {isAuthRoute ? null : <NavBar />}
        {isAuthRoute ? null : <UserBar />}
      </div>
    </header>
  );
};

export default Header;
