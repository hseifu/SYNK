import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminLoginForm from '../components/AdminLoginForm';
import EventFormPage from '../components/EventFormPage';
import AddEventPage from '../components/AddEventPage';
import AdminCalendar from '../components/AdminCalendarContainer';
import StudentCalendar from '../components/StudentCalendarContainer';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <PublicRoute path="/adminlogin" component={AdminLoginForm} exact={true}/>
                <PublicRoute path="/admincalendar" component={AdminCalendar} exact={true}/>
                <Route path="/studentcalendar" component={StudentCalendar} exact={true}/>
                <PublicRoute path="/eventform" component={EventFormPage} exact={true}/>
                <Route path="/addevent" component={AddEventPage} exact={true}/>
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;