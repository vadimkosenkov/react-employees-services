import React, { useState, useEffect } from 'react';
import s from './Employees.module.scss';
import SearchBar from './SearchBar/SearchBar.jsx';
import EmployeesBar from './EmployeesBar/EmployeesBar.jsx';
import PageNotFound from './PageNotFound/PageNotFound.jsx';
import { sendRequest } from './../../utilities/utilities.js';

const Employees = () => {
    const [employees, employeesState] = useState([]);

    useEffect(() => {
        sendRequest(`https://nodejs-ps143.herokuapp.com/api/employees`, renderCards, 'GET');
    }, []);

    const getFilteredEmployees = searchValue => {
        const searchUrl = `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`;
        sendRequest(searchUrl, renderCards, 'GET');
    };

    const renderCards = (data, error) => {
        if (!error) {
            employeesState([...data]);
        }
    };

    return (
        <main className={s.main}>
            <div className={s.mainContainer}>
                <SearchBar filterEmployees={getFilteredEmployees} />
                {employees.length ? <EmployeesBar employees={employees} /> : <PageNotFound />}
            </div>
        </main>
    );
};

export default Employees;
