import React, {Component} from 'react';
import {login} from '../../utils/otherUtil';

import '../../styles/login/login.css';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      type: "input"
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);

  }
  componentDidMount() {

  }

  componentDidUpdate(e) {

    // if (this.props.location.pathname !== e.location.pathname) {

    //   this
    //     .props
    //     .clearErrors();
    // }
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props)
    const user = Object.assign({}, this.state);
    login().then(e => this.props.history.push('/campaigns'));
    
  }

  onChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    return (
        <div> 
            <form onSubmit={this.handleSubmit} className="form-container"> 

                <p className="form-label">Username</p> 
                <li className="form-components">
                
                    <input
                    key="45"
                    type="text"
                    onChange={this.onChange("username")}
                    id="form-input"/>

                </li> 
                <p className="form-label"> Password </p>
                <div className="form-components">
                    <input 
                    key="3"
                    type="password" 
                    onChange={this.onChange("password")} 
                    id="form-input"/> 
                    <div onClick={this.handleSubmit} className="button-log-submit"> 
                        <input type="submit" value="sign in"/> 
                    </div>

                </div>
            </form>
        </div>
    )
  }
}