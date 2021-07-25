import React, { useState, useEffect } from "react";
import s from "./Roles.module.scss";
import PageNotFound from "./../Employees/PageNotFound/PageNotFound.jsx";
import RolesCard from "./RolesCard/RolesCard.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { sendRequest } from "./../../utilities/utilities.js";

const Roles = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/employees`,
      renderCards,
      "GET"
    );
  }, [getFilteredEmployees]);

  const getFilteredEmployees = (searchValue) => {
    const searchUrl = `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`;
    sendRequest(searchUrl, renderCards, "GET");
  };

  const renderCards = (data, error) => {
    if (!error) {
      setEmployees({ employees: [...data], a: data.length });
    }
  };

  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <SearchBar filterEmployees={getFilteredEmployees} />
        {employees.a ? (
          <RolesCard employees={employees.employees} />
        ) : (
          <PageNotFound />
        )}
      </div>
    </main>
  );
};

export default Roles;
