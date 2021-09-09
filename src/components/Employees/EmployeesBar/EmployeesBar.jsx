import React from "react";
import { useSelector } from "react-redux";
import s from "./EmployeesBar.module.scss";
import EmployeesBarHeader from "./EmployeesBarHeader/EmployeesBarHeader.jsx";
import Card from "./Card/Card.jsx";
import CardRow from "./CardRow/CardRow.jsx";

const EmployeesBar = () => {
  const employees = useSelector((state) => state.employees.employees);
  const isRow = useSelector((state) => state.employees.isRow);

  const cardElements = employees.map((elem) => {
    if (isRow) {
      return <CardRow key={elem.id} employee={elem} />;
    } else {
      return <Card key={elem.id} employee={elem} />;
    }
  });

  return (
    <div className={s.employeesBar}>
      <EmployeesBarHeader />
      <div className={s.card}>
        <div className={`${s.cardContainer} ${isRow ? s.rowStyle : " "}`}>
          {cardElements}
        </div>
      </div>
    </div>
  );
};

export default EmployeesBar;
