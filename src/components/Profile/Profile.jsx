import React, { useState, useEffect } from 'react';
import '../../App.scss';
import s from './Profile.module.scss';
import NarrowColumn from './NarrowColumn/NarrowColumn.jsx';
import WideColumn from './WideColumn/WideColumn.jsx';
import { withRouter } from 'react-router';
import { sendRequest } from './../../utilities/utilities.js';

const Profile = props => {
    const [user, userState] = useState(props.location.search.split('=')[1]);
    const [edit, isEditState] = useState(false);
    const [data, dataState] = useState([]);

    const getEmployeeData = () => {
        sendRequest(`https://nodejs-ps143.herokuapp.com/api/employees/${user}`, renderProfile, 'GET');
    };

    const setEdit = isEdit => {
        if (isEdit) {
            isEditState(isEdit);
        } else {
            isEditState(isEdit);
            getEmployeeData();
        }
    };

    const renderProfile = (data, error) => {
        if (!error) {
            dataState({ ...data });
        }
    };

    useEffect(() => {
        getEmployeeData();
    }, []);

    return (
        <main className={s.main}>
            <div className={s.mainContainer}>
                <NarrowColumn data={data} edit={edit} />
                <WideColumn setEditState={setEdit} data={data} edit={edit} />
            </div>
        </main>
    );
};

export default withRouter(Profile);
