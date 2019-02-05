import React from 'react';
import AdminHeader from './AdminHeader';
import Calendar from './Calendar';

const AdminCalendarView = () => {
    return (
        <div>
            <AdminHeader />
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container-calendar">
                
                <Calendar />
            </div>
        </div>
    )
}

export default AdminCalendarView;