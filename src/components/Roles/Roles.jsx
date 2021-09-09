import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import s from "./Roles.module.scss";
import PropTypes from "prop-types";
import PageNotFound from "./../Employees/PageNotFound/PageNotFound.jsx";
import RolesCard from "./RolesCard/RolesCard.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { getEmployeeDataAction } from "./../../toolkitSlice/rolesSlice";
import { showAlert } from "./../../utilities/utilities";

const getEmployeeData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees`
      );
      const json = await response.json();
      dispatch(getEmployeeDataAction([...json]));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

const Roles = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeData());
  }, [props.employees.length]);

  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <SearchBar />
        {props.employees.length ? <RolesCard /> : <PageNotFound />}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.roles.employees,
  };
};

Roles.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Roles);
