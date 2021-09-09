import React from "react";
import s from "./NarrowColumn.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NarrowColumn = () => {
  const employee = useSelector((state) => state.profile.employee);
  const isEdit = useSelector((state) => state.profile.isEdit);

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
            src={employee.avatarSrc}
          />
          <div className={isEdit ? s.hidden : ""}>
            <div className={s.gender}>{employee.gender}</div>
            <div
              className={
                s.nameEn
              }>{`${employee.firstName} ${employee.lastName}`}</div>
            <div className={s.nameRu}>
              {`${employee.firstNameNative} ${employee.middleNameNative} ${employee.lastNameNative}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrowColumn;
