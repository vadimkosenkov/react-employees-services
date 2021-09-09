import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getEmployeeDataAction } from "./../../toolkitSlice/profileSlice";
import "../../App.scss";
import s from "./Profile.module.scss";
import NarrowColumn from "./NarrowColumn/NarrowColumn.jsx";
import WideColumn from "./WideColumn/WideColumn.jsx";
import { showAlert } from "./../../utilities/utilities";

const getEmployeeData = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees/${userId}`
      );
      const json = await response.json();
      dispatch(getEmployeeDataAction({ ...json }));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

const Profile = (props) => {
  const dispatch = useDispatch();
  const userId = props.location.search.split("=")[1];

  useEffect(() => {
    dispatch(getEmployeeData(userId));
  }, []);

  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <NarrowColumn />
        <WideColumn />
      </div>
    </main>
  );
};

Profile.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string }),
};

export default withRouter(Profile);
