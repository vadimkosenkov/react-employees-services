import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Roles.module.scss";
import PageNotFound from "./../Employees/PageNotFound/PageNotFound.jsx";
import RolesCard from "./RolesCard/RolesCard.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { getEmployeeData } from "./../../actions/roles-action";

const Roles = () => {
  const employees = useSelector((state) => state.roles.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);

  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <SearchBar />
        {employees.length ? <RolesCard /> : <PageNotFound />}
      </div>
    </main>
  );
};

export default Roles;
