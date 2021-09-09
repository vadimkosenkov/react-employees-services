import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { checkAuthRouteAction } from "./../../toolkitSlice/headerSlice";
import PropTypes from "prop-types";
import "./../../App.scss";
import s from "./Header.module.scss";
import Title from "./Title/Title.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import UserBar from "./UserBar/UserBar.jsx";

const Header = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.location.pathname === "/auth") {
      dispatch(checkAuthRouteAction(true));
    } else if (props.location.pathname !== "/auth") {
      dispatch(checkAuthRouteAction(false));
    } else {
      dispatch(checkAuthRouteAction(false));
    }
  }, [props.location.pathname]);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Title />
        {props.isAuthRoute ? null : <NavBar />}
        {props.isAuthRoute ? null : <UserBar />}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthRoute: state.header.isAuthRoute,
  };
};

Header.propTypes = {
  isAuthRoute: PropTypes.bool,
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

export default connect(mapStateToProps)(Header);
