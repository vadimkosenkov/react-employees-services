import React, { useState } from 'react';
import s from './EmployeesBar.module.scss';
import EmployeesBarHeader from './EmployeesBarHeader/EmployeesBarHeader.jsx';
import Card from './Card/Card.jsx';
import CardRow from './CardRow/CardRow.jsx';

const EmployeesBar = props => {
    const [isRow, isRowState] = useState(false);

    const getViewType = () => {
        isRowState(!isRow);
    };

    const cardElements = props.employees.map(elem => {
        if (isRow) {
            return <CardRow key={elem.id} employee={elem} />;
        } else {
            return <Card key={elem.id} employee={elem} />;
        }
    });

    return (
        <div className={s.employeesBar}>
            <EmployeesBarHeader changeView={getViewType} employeeCount={props.employees.length} />
            <div className={s.card}>
                <div className={`${s.cardContainer} ${isRow ? s.rowStyle : ' '}`}>{cardElements}</div>
            </div>
        </div>
    );
};

export default EmployeesBar;
