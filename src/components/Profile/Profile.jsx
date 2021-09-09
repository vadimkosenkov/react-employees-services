import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { getEmployeeData } from "./../../actions/profile-action";
import "../../App.scss";
import s from "./Profile.module.scss";
import NarrowColumn from "./NarrowColumn/NarrowColumn.jsx";
import WideColumn from "./WideColumn/WideColumn.jsx";

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

export default withRouter(Profile);
