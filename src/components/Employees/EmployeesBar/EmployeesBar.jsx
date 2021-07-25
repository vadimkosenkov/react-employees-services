import React from 'react';
import s from './EmployeesBar.module.scss';
import EmployeesBarHeader from './EmployeesBarHeader/EmployeesBarHeader.jsx';
import Card from './Card/Card.jsx';
import CardRow from './CardRow/CardRow.jsx';

class EmployeesBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRowView: false,
        };
    }

    getViewType = () => {
        this.setState({ isRowView: !this.state.isRowView });
    };

    render() {
        const cardElements = this.props.employees.map(elem => {
            if (this.state.isRowView) {
                return <CardRow key={elem.id} employee={elem} />;
            } else {
                return <Card key={elem.id} employee={elem} />;
            }
        });

        return (
            <div className={s.employeesBar}>
                <EmployeesBarHeader changeView={this.getViewType} employeeCount={this.props.employees.length} />
                <div className={s.card}>
                    <div className={`${s.cardContainer} ${this.state.isRowView ? s.rowStyle : ' '}`}>
                        {cardElements}
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesBar;
