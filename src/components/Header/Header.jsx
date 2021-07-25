import React from 'react';
import './../../App.scss';
import s from './Header.module.scss';
import Title from './Title/Title.jsx';
import NavBar from './NavBar/NavBar.jsx';
import UserBar from './UserBar/UserBar.jsx';

class Header extends React.Component {
    isAuthRoute = false;

    constructor(props) {
        super(props);
        this.state = {
            route: '/',
        };
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.location.pathname === '/auth') {
            this.isAuthRoute = true;
            return true;
        } else if (this.props.location.pathname !== '/auth') {
            return false;
        } else {
            this.isAuthRoute = false;
            return true;
        }
    }

    render() {
        return (
            <header className={s.header}>
                <div className={s.headerContainer}>
                    <Title />
                    {this.isAuthRoute ? null : <NavBar />}
                    {this.isAuthRoute ? null : <UserBar />}
                </div>
            </header>
        );
    }
}
export default Header;
