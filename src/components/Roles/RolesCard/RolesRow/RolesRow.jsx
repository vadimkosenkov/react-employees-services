import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sendRoleAction } from "../../../../toolkitSlice/rolesSlice";
import { showAlert } from "../../../../utilities/utilities";
import s from "./RolesRow.module.scss";

function sendRole(userId, role) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://nodejs-ps143.herokuapp.com/api/role/${userId}`,
        {
          body: JSON.stringify({ role }),
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      dispatch(sendRoleAction({ ...json }));
    } catch (e) {
      dispatch(showAlert("Request error. Please try again"));
    }
  };
}

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

RolesRow.propTypes = {
  employee: PropTypes.object.isRequired,
  employee: PropTypes.shape({
    id: PropTypes.number,
    role: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    firstNameNative: PropTypes.string,
    lastNameNative: PropTypes.string,
  }),
};

export default RolesRow;
