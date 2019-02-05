import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Redirect } from 'react-router-dom';


class AdminLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: false,
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;
      
        this.setState({ error: false });
      
        if (!(username === 'henokhailu37@gmail.com' && password === 'username')) {
            console.log('wrong username and password')
          return this.setState({ error: true });
        }
        
        history.push('/admincalendar')
        
      }
    
    onUsernameChange (e) {
        const username = e.target.value;
        this.setState(() => ({username}));
    }

    onPasswordChange (e) {
        const password = e.target.value;
        this.setState(() => ({password}));
    }
    render() {
        return (
            <div className="box-layout">
                <div className="form__login">
                    <form onSubmit={this.onSubmit} >
                        <input
                            className="text-input login-input"
                            type="text"
                            placeholder="username"
                            onChange={this.onUsernameChange}
                        />
                        <input
                            className="text-input login-input"
                            type="password"
                            placeholder="password"
                            onChange={this.onPasswordChange}
                        />
                         <div>
                            <button className="button">log in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(AdminLoginForm);