import React, { useState } from 'react';
import './../../../../App.scss';
import s from './EmployeesBarHeader.module.scss';

const EmployeesBarHeader = props => {
    const [isRow, isRowState] = useState(false);

    const changeView = () => {
        props.changeView(!isRow);
        isRowState(!isRow);
    };

    return (
        <div className={s.employeesBarHeader}>
            <span className={s.employeesDisplayed}>{props.employeeCount} employees displayed</span>
            <div className={s.viewBar}>
                <svg
                    className={s.gridViewIcon + ' ' + (isRow ? '' : s.svgActive)}
                    onClick={changeView}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.5 6C4.5 5.17157 5.17157 4.5 6 4.5H9C9.82843 4.5 10.5 5.17157 10.5 6V9C10.5 9.82843 9.82843 10.5 9 10.5H6C5.17157 10.5 4.5 9.82843 4.5 9V6Z"
                        fill="#F6F8FD"
                        stroke="#AFB7BF"
                    />
                    <path
                        d="M4.5 15C4.5 14.1716 5.17157 13.5 6 13.5H9C9.82843 13.5 10.5 14.1716 10.5 15V18C10.5 18.8284 9.82843 19.5 9 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V15Z"
                        fill="#F6F8FD"
                        stroke="#AFB7BF"
                    />
                    <path
                        d="M13.5 15C13.5 14.1716 14.1716 13.5 15 13.5H18C18.8284 13.5 19.5 14.1716 19.5 15V18C19.5 18.8284 18.8284 19.5 18 19.5H15C14.1716 19.5 13.5 18.8284 13.5 18V15Z"
                        fill="#F6F8FD"
                        stroke="#AFB7BF"
                    />
                    <path
                        d="M13.5 6C13.5 5.17157 14.1716 4.5 15 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V9C19.5 9.82843 18.8284 10.5 18 10.5H15C14.1716 10.5 13.5 9.82843 13.5 9V6Z"
                        fill="#F6F8FD"
                        stroke="#AFB7BF"
                    />
                </svg>
                <svg
                    className={s.rowViewIcon + ' ' + (isRow ? s.svgActive : '')}
                    onClick={changeView}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.5 6C4.5 5.17157 5.17157 4.5 6 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6C19.5 6.82843 18.8284 7.5 18 7.5H6C5.17157 7.5 4.5 6.82843 4.5 6Z"
                        stroke="#AFB7BF"
                    />
                    <path
                        d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5H18C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5H6C5.17157 13.5 4.5 12.8284 4.5 12Z"
                        stroke="#AFB7BF"
                    />
                    <path
                        d="M4.5 18C4.5 17.1716 5.17157 16.5 6 16.5H18C18.8284 16.5 19.5 17.1716 19.5 18C19.5 18.8284 18.8284 19.5 18 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18Z"
                        stroke="#AFB7BF"
                    />
                </svg>
            </div>
        </div>
    );
};

export default EmployeesBarHeader;
