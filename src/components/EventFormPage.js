import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

const now = moment(); 

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.event ? props.event.description : "",
            note: props.event ? props.event.note : "",
            startDate: props.event ? props.startDate : moment(),
            endDate: props.event ? props.endDate : moment().add(4,'days'),
            
            focusedInput: true,
            error: ''
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    
    onStartDateChange = (startDate) => {
        if (startDate){
            this.setState(() => ({startDate}))
        }
    }
    onEndDateChange = (endDate) => {
        if (endDate){
            this.setState(() => ({endDate}))
        }
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.startDate || !this.state.endDate) {
            this.setState(() => ({error: "Please provide description and duration of event"}))
        }
        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                startDate: this.state.startDate.valueOf(),
                endDate: this.state.endDate.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    className="text-input"
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId={this.state.description} // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId={this.state.description} // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={null} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                <textarea
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder="add a note for event (optional)"
                >
                </textarea>
                <div>
                    <button className="button">Save Event</button>
                </div>
            </form>
        )
    }
}

export default EventForm;