import React from "react";
import './Form.css'


class Form extends React.Component {
    state = {
        firstName:"",
        lastName:"",
        email:""
    }
    
    update = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <div className="form">
                <form>
                    <h1>Sign up</h1>
                    <div>
                        <input value={firstName} name="firstName" placeholder="first name" onChange={this.update}/>
                    </div>
                        <div>
                            <input value={lastName} name="lastName" placeholder="last name" onChange={this.update}/>
                            </div>
                        <div>
                            <input value={email} name="email" placeholder="email" onChange={this.update}/>
                        </div>
                    <hr />
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <div>{email}</div>
                </form>
            </div>
        )
    }
}

export default Form