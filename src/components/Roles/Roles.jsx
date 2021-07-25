import React from 'react';
import s from './Roles.module.scss';
import PageNotFound from './../Employees/PageNotFound/PageNotFound.jsx';
import RolesCard from './RolesCard/RolesCard.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import { sendRequest } from './../../utilities/utilities.js';

class Roles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        this.mounted = true;
        sendRequest(`https://nodejs-ps143.herokuapp.com/api/employees`, this.renderCards, 'GET');
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    getFilteredEmployees = searchValue => {
        const searchUrl = `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`;
        sendRequest(searchUrl, this.renderCards, 'GET');
    };

    renderCards = (data, error) => {
        if (!error && this.mounted) {
            this.setState({ employees: [...data], a: data.length });
        }
    };

    getFilteredEmployees = searchValue => {
        const searchUrl = `https://nodejs-ps143.herokuapp.com/api/employees?search=${searchValue}`;
        sendRequest(searchUrl, this.renderCards, 'GET');
    };

    render() {
        return (
            <main className={s.main}>
                <div className={s.mainContainer}>
                    <SearchBar filterEmployees={this.getFilteredEmployees} />

                    {this.state.employees.length ? <RolesCard employees={this.state.employees} /> : <PageNotFound />}
                </div>
            </main>
        );
    }
}

export default Roles;
