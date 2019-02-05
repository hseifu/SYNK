import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Redirect, Link } from 'react-router-dom';

const TeacherLogin = ({ startLogin }) => (
    <div className="box-layout__box">
        <h1 className="box-layout__title">Teacher </h1>
        <p>Manage classes to give</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
)

const StudentLogin = ({ startLogin }) => (
    <div className="box-layout__box">
        <h1 className="box-layout__title">Student</h1>
        <p>Manage your classes</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
)

const AdminLogin = ({startLogin}) => (
    <div className="box-layout__box">
        <h1 className="box-layout__title">Admin</h1>
        <p>Create and Manage All Meetings in One Place</p>
        <Link to='/adminlogin' className="button">Log in</Link>
    </div>
)

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <TeacherLogin startLogin={startLogin} />
        <StudentLogin startLogin={startLogin} />
        <AdminLogin startLogin={startLogin} />
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);