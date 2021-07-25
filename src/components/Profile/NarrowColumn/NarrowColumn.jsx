import React from "react";
import s from "./NarrowColumn.module.scss";
import { NavLink } from "react-router-dom";

class NarrowColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  render() {
    return (
      <div className={s.narrowColumn}>
        <div className={s.narrowColumnAvatar}>
          <NavLink to={"./"}>
            <img
              src="/assets/icons/arrow-left.svg"
              className={s.arrowLeft}
              alt="icon: arrow left"
            />
          </NavLink>
          <div>
            <img
              className={s.avatar}
              alt="image: employee avatar"
              src={this.props.employee.avatarSrc}
            />
            <div className={this.props.employee.isEdit ? s.hidden : ""}>
              <div className={s.gender}>{this.props.employee.gender}</div>
              <div
                className={
                  s.nameEn
                }>{`${this.props.employee.firstName} ${this.props.employee.lastName}`}</div>
              <div className={s.nameRu}>
                {`${this.props.employee.firstNameNative} ${this.props.employee.middleNameNative} ${this.props.employee.lastNameNative}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NarrowColumn;
