import React, { useEffect, useState } from "react";
import s from "./RolesRow.module.scss";
import { sendRequest } from "./../../../../utilities/utilities.js";

const RolesRow = (props) => {
  const [role, setRole] = useState(props.employee.role);
  const changeRole = (arg) => {
    setRole(arg);
    sendRequest(
      `https://nodejs-ps143.herokuapp.com/api/role/${props.employee.id}`,
      () => {},
      "PATCH",
      { role: arg }
    );
  };

  return (
    <div className={s.row}>
      <img className={s.employeeImgRow} src={props.employee.avatarSrc} />
      <div className={s.rowContainer}>
        <div className={s.cardNameEn}>
          {props.employee.firstName + " " + props.employee.lastName}
        </div>
        <div className={s.cardNameRu}>
          {props.employee.firstNameNative + " " + props.employee.lastNameNative}
        </div>
      </div>
      <div className={s.rowContainerInfo}>
        <button
          className={s.roleBtn + " " + (role === "user" ? s.btnActive : null)}
          onClick={() => changeRole("user")}>
          employee
        </button>
        <button
          className={s.roleBtn + " " + (role === "editor" ? s.btnActive : null)}
          onClick={() => changeRole("editor")}>
          editor
        </button>
        <button
          className={s.roleBtn + " " + (role === "admin" ? s.btnActive : null)}
          onClick={() => changeRole("admin")}>
          admin
        </button>
      </div>
    </div>
  );
};

export default RolesRow;
