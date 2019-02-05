import React from "react";
import dateFns from "date-fns";
import getStudentSchedule, {getStudentMonthSchedule} from '../actions/schedule';


class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    dateSchedule: [],
    monthSchedule: [],
    showAll: false
  };
  
  renderHeader() {
    
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const showAll = this.state.showAll;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const sched = this.state.dateSchedule;
    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let toRender = [];
    while (day <= endDate) {
        toRender = [];
        for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            {showAll && this.state.monthSchedule[formattedDate] ?
              <div> {this.state.monthSchedule[formattedDate].map((slot, index) => {
                  return (<div key={index}>{slot}</div>)
              })}
              </div> : 
              dateFns.format(this.state.selectedDate, 'D') === formattedDate ? 
              sched.length ?  
            sched.map((schedule,index) => {return (<div key={index}>{schedule}</div>)}): 
              <div>No Appointements</div> 
              : <div>Click to Show</div>}
            
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return (
        <div 
            className="body">{rows}
        </div>)
    ;
  }

  onDateClick = day => {
    const date = dateFns.format(this.state.selectedDate, "D");
    getStudentSchedule(date).then((schedule) => {
        this.setState(() => ({dateSchedule: schedule, selectedDate: day}));
    })
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  setMonthSchedule = () => {
      getStudentMonthSchedule().then((schedule) => {
          this.setState(() => ({monthSchedule: schedule, showAll: !this.state.showAll}));
      })
  }
  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        
        {this.renderDays()}
        {this.renderCells()}
        <button className="button" onClick={this.setMonthSchedule}>{this.state.showAll ? <div>hide</div> : <div>Get All</div> }</button>
      </div>
    );
  }
}

export default Calendar;