import React from "react";
import s from "./RolesCard.module.scss";
import RolesRow from "./RolesRow/RolesRow.jsx";

const RolesCard = (props) => {
  const cardElements = props.employees.map((elem) => {
    return <RolesRow key={elem.id} employee={elem} />;
  });

  return <div className={s.cardContainer}>{cardElements}</div>;
};

export default RolesCard;
