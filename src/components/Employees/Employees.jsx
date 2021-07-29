import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "./../../utilities/utilities.js";
import s from "./Employees.module.scss";
import SearchBar from "./SearchBar/SearchBar.jsx";
import EmployeesBar from "./EmployeesBar/EmployeesBar.jsx";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";
import { getEmployeesAction } from "./../../toolkitSlice/employeesSlice";

const getEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees`
      );
      const json = await response.json();
      dispatch(getEmployeesAction([...json]));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <SearchBar />
        {employees.length ? <EmployeesBar /> : <PageNotFound />}
      </div>
    </main>
  );
};

export default Employees;
