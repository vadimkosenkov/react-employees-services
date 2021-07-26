import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "./../../actions/employees-action";
import s from "./Employees.module.scss";
import SearchBar from "./SearchBar/SearchBar.jsx";
import EmployeesBar from "./EmployeesBar/EmployeesBar.jsx";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";

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
