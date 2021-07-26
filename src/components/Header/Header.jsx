import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthRoute } from "./../../actions/header-action";
import "./../../App.scss";
import s from "./Header.module.scss";
import Title from "./Title/Title.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import UserBar from "./UserBar/UserBar.jsx";

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuthRoute = useSelector((state) => state.header.isAuthRoute);

  useEffect(() => {
    if (props.location.pathname === "/auth") {
      dispatch(checkAuthRoute(true));
    } else if (props.location.pathname !== "/auth") {
      dispatch(checkAuthRoute(false));
    } else {
      dispatch(checkAuthRoute(false));
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
