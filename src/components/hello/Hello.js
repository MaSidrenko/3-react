import React from "react";
import './Hello.css';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello",
            sing: "Rus"
        };
    }

    changeText = () => {
        this.setState({text: this.state.text === "Hello" ? "Привет" : "Hello"})
        this.setState({sing: this.state.sing === "Rus" ? "Eng" : "Rus"})
    }
        

    render() {
        return (
            <div>
                <button onClick={this.changeText}>{this.state.sing}</button>
                <div className="hello">
                    {this.state.text}
                </div>
            </div>
        )
    }
}


export default Hello;