import database from '../firebase/firebase';
import moment from 'moment';

export default (day) => {
    return database.ref(`students/Student/${day}`).once('value').then((snapshot) => {
        return snapshot.val();
    })
}

export const getStudentMonthSchedule = () => {
    return database.ref(`students/Student`).once('value').then((snapshot) => {
        return snapshot.val();
    })
}

export const setEvent = (event) => {
    const startDay = moment(event.startDate).date();
    const endDay = moment(event.endDate).date();
    const interval = [];
    for (let count = 0; count+startDay <= endDay; count ++){
        interval.push(startDay+count);
    }
    interval.forEach((day) => {
        return database.ref(`students/Student/${day}/`).update({3: `${event.description}`})
    })
    
}