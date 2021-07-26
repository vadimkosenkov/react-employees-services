import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./RolesRow.module.scss";
import { sendRole } from "../../../../actions/roles-action";

const RolesRow = (props) => {
  const [role, setRole] = useState(props.employee.role);
  const dispatch = useDispatch();

  const changeRole = (role) => {
    dispatch(sendRole(props.employee.id, role));
  };

  useEffect(() => {
    setRole(props.employee.role);
  }, [props]);

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
