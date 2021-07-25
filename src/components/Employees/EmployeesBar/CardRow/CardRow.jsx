import React from "react";
import s from "./CardRow.module.scss";
import { NavLink } from "react-router-dom";

function CardRow(props) {
  return (
    <NavLink to={`./profile?id=${props.employee.id}`} className={s.row}>
      <img className={s.employeeImgRow} src={props.employee.avatarSrc} />
      <div className={s.rowContainer}>
        <div className={s.cardNameEn}>
          {props.employee.firstName + " " + props.employee.lastName}
        </div>
        <div className={s.cardNameRuRow}>
          {props.employee.firstNameNative + " " + props.employee.lastNameNative}
        </div>
        <div className={s.rowContainerInfo}>
          <div className={s.rowInfoContainer}>
            <img src="./assets/icons/department.svg" />
            <div>{props.employee.department}</div>
          </div>
          <div className={s.rowInfoContainer}>
            <img src="./assets/icons/room.svg" />
            <div>{props.employee.roomNumber}</div>
          </div>
          <div className={s.rowInfoContainer}>
            <img src="./assets/icons/mobile-phone.svg" />
            <div>{props.employee.mobilePhone}</div>
          </div>
          <div className={s.rowInfoContainer}>
            <img src="./assets/icons/internal-phone.svg" />
            <div>{props.employee.internalPhone}</div>
          </div>
          <div className={s.rowInfoContainer}>
            <img src="./assets/icons/c-number.svg" />
            <div>{props.employee.cNumber}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default CardRow;
