import React from 'react';
import s from './Card.module.scss';
import { NavLink } from 'react-router-dom';

const Card = props => {
    return (
        <NavLink to={`./profile?id=${props.employee.id}`} className={s.employeeCard}>
            <div className={s.cardNameContainer}>
                <img className={s.employeeImg} src={props.employee.avatarSrc} />
                <div className={s.cardNameEn}>{props.employee.firstName + ' ' + props.employee.lastName}</div>
                <div className={s.cardNameRu}>
                    {props.employee.firstNameNative + ' ' + props.employee.lastNameNative}
                </div>
            </div>
            <div className={s.officeLocation}>
                <div className={s.officeDepartment}>
                    <img src="./assets/icons/department.svg" />
                    {props.employee.department}
                </div>
                <div className={s.officeRoom}>
                    <img src="./assets/icons/room.svg" />
                    {props.employee.roomNumber}
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
