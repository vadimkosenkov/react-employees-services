import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterEmployeesAction } from "./../../../toolkitSlice/rolesSlice";
import { showAlert } from "./../../../utilities/utilities";
import s from "./SearchBar.module.scss";

const getFilterEmployees = (searchValue) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`
      );
      const json = await response.json();
      dispatch(getFilterEmployeesAction([...json]));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
};

const SearchBar = () => {
  const [searchValue, searchValueState] = useState("");
  const dispatch = useDispatch();

  const sendSearchData = () => {
    dispatch(getFilterEmployees(searchValue));
  };

  return (
    <div className={s.searchBar}>
      <div className={s.searchPanel}>
        <div className={s.searchInputContainer}>
          <img src="./assets/icons/search.svg" alt="icon: search" />
          <input
            className={s.searchInput}
            type="text"
            placeholder="John Smith / Джон Смит"
            onChange={(e) => searchValueState(e.target.value)}
          />
        </div>
        <button className={s.searchButton} onClick={sendSearchData}>
          Search
        </button>
        <div className={s.roleTitle}>roles &amp; permissions</div>
      </div>
    </div>
  );
};

export default SearchBar;
