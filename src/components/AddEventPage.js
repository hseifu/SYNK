import React from 'react';
import EventFormPage from './EventFormPage';
import AdminHeader from './AdminHeader';

import { setEvent } from '../actions/schedule';

const AddEventPage = (props) => (
    <div>
        <AdminHeader />
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Event</h1>
            </div>
        </div>
        <div className="content-container">
            <EventFormPage
                onSubmit={(event) => {
                    setEvent(event);
                    props.history.push('/admincalendar')
                }}
            />
        </div>
    </div>
)

export default AddEventPage

