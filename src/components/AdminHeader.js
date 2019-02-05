import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to='/admincalendar'>
                <h1>Calendar</h1>
            </Link>
            <Link className="header__title" to='/addevent'>
                <h1>Add Event</h1>
            </Link>
            <Link className="button button--link" to='/'>Logout</Link>
        </div>
    </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);