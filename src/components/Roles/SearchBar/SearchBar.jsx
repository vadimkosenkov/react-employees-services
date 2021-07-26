import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterEmployees } from "./../../../actions/roles-action";
import s from "./SearchBar.module.scss";

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
