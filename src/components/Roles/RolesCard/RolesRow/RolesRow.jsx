import React from 'react';
import s from './RolesRow.module.scss';
import { sendRequest } from './../../../../utilities/utilities.js';

class RolesRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: props.employee.role,
        };
    }

    changeRole(role) {
        const newRoleObj = { role: role };
        sendRequest(
            `https://nodejs-ps143.herokuapp.com/api/role/${this.props.employee.id}`,
            () => {},
            'PATCH',
            newRoleObj,
        );
        this.setState(newRoleObj);
    }

    render() {
        return (
            <div className={s.row}>
                <img className={s.employeeImgRow} src={this.props.employee.avatarSrc} />
                <div className={s.rowContainer}>
                    <div className={s.cardNameEn}>
                        {this.props.employee.firstName + ' ' + this.props.employee.lastName}
                    </div>
                    <div className={s.cardNameRu}>
                        {this.props.employee.firstNameNative + ' ' + this.props.employee.lastNameNative}
                    </div>
                </div>
                <div className={s.rowContainerInfo}>
                    <button
                        className={s.roleBtn + ' ' + (this.state.role === 'user' ? s.btnActive : null)}
                        onClick={() => this.changeRole('user')}>
                        employee
                    </button>
                    <button
                        className={s.roleBtn + ' ' + (this.state.role === 'editor' ? s.btnActive : null)}
                        onClick={() => this.changeRole('editor')}>
                        editor
                    </button>
                    <button
                        className={s.roleBtn + ' ' + (this.state.role === 'admin' ? s.btnActive : null)}
                        onClick={() => this.changeRole('admin')}>
                        admin
                    </button>
                </div>
            </div>
        );
    }
}

export default RolesRow;
