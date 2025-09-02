import React from "react";

class HextoDec extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hex: "", dec: 0 };

        this.setHex = this.setHex.bind(this.hex);
    }

    setHex = (e) => {
        this.setState({hex: e.target.value})
    }

    convert = () => {
        // let test = 0;
        this.state.dec = 0;
        let tempHex = this.state.hex;
        for (let i = tempHex.length - 1; i >= 0; i--) {
            let pow = tempHex.length - 1 - i;
            console.log(tempHex[i]);
            switch (tempHex[i]) {
                case 'A': {
                    this.state.dec += 10 * Math.pow(16, pow);
                } break;
                case 'B': {
                    this.state.dec += 11 * Math.pow(16, pow);
                } break;
                case 'C': {
                    this.state.dec += 12 * Math.pow(16, pow);
                } break;
                case 'D': {
                    this.state.dec += 13 * Math.pow(16, pow);
                } break;
                case 'E': {
                    this.state.dec += 14 * Math.pow(16, pow);
                } break;
                case 'F': {
                    this.state.dec += 15 * Math.pow(16, pow);
                } break;
                default: {
                    this.state.dec += Number(tempHex[i]) * Math.pow(16, pow);
                } break;
            }
        }
        this.setState({dec: this.state.dec});
    }
    render() {
        return(
            <div>
                <input type="text"  value={this.state.hex} onChange={this.setHex} placeholder="AA"/>
                <div className="hex">
                    Hex: {this.state.hex}
                </div>
                <div className="converter">
                    <button onClick={this.convert}>Convert</button>
                </div>
                <div className="dec">
                    Decimal: {this.state.dec}
                </div>
            </div>
        )
    }
}

export default HextoDec;