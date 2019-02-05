import React from 'react';
import StudentHeader from './StudentHeader';
import Calendar from './Calendar';

const StudentCalendarView = () => {
    return (
        <div>
            <StudentHeader />
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

export default StudentCalendarView;