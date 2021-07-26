import React from "react";
import { useSelector } from "react-redux";
import s from "./RolesCard.module.scss";
import RolesRow from "./RolesRow/RolesRow.jsx";

const RolesCard = () => {
  const employees = useSelector((state) => state.roles.employees);

  const cardElements = employees.map((elem) => {
    return <RolesRow key={elem.id} employee={elem} />;
  });

  return <div className={s.cardContainer}>{cardElements}</div>;
};

export default RolesCard;
