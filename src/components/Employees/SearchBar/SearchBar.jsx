import React from "react";
import s from "./SearchBar.module.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  sendSearchData = () => {
    this.props.filterEmployees(this.state.searchValue);
  };

  render() {
    return (
      <div className={s.searchBar}>
        <div className={s.searchSetup}>
          <div>
            <a className="active-search-link" href="#">
              Basic search
            </a>
          </div>
          <div>
            <a href="#">Advanced search</a>
          </div>
        </div>
        <div className={s.searchPanel}>
          <div className={s.searchInputContainer}>
            <img
              src="./assets/icons/search.svg"
              alt="icon: search"
              width="24px"
            />
            <input
              className={s.searchInput}
              type="text"
              placeholder="John Smith / Джон Смит"
              onChange={(e) => this.setState({ searchValue: e.target.value })}
            />
          </div>
          <button className={s.searchBtn} onClick={this.sendSearchData}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
