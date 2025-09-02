import React from "react";
import './Dec-to-Hex.css';

class DectoHex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hex: "", dec: "" };

        this.setDec = this.setDec.bind(this.dec);
    }

    convert = () => {
        this.state.hex = "";
        let tempDec = this.state.dec;
        for (let i = 0, tempHex = Math.floor(this.state.dec % 16); i < this.state.dec; this.state.dec = Math.floor(this.state.dec / 16), tempHex = this.state.dec % 16) {
            if (tempHex >= 10) {
                switch (tempHex) {
                    case 10: {
                        this.state.hex += 'A';
                    } break;
                    case 11: {
                        this.state.hex += 'B';
                    } break;
                    case 12: {
                        this.state.hex += 'C';
                    } break;
                    case 13: {
                        this.state.hex += 'D';
                    } break;
                    case 14: {
                        this.state.hex += 'E';
                    } break;
                    case 15: {
                        this.state.hex += 'F';
                    } break;
                }
                // console.log(tempHex);
            } else {
                this.state.hex += tempHex;
            }
        }
        this.revers(this.state.hex);
        this.setState({ dec: this.state.dec = tempDec });
    }
    setDec = (e) => {
        this.setState({ dec: e.target.value });
    }
    revers = (revHex) => {
        this.state.hex = revHex.split('').reverse().join('');
        console.log(this.state.hex);
        this.setState({ hex: this.state.hex });
    }
    render() {
        return (
            <div>
                <h1>Decimal To Hex</h1>
                <input type="text" value={this.state.dec} onChange={this.setDec} placeholder="0" />
                <div className="dec">
                    Decimal: {this.state.dec}
                </div>
                <div className="converter">
                    <button onClick={this.convert}>Convert</button>
                </div>
                <div className="hex">
                    Hex: {this.state.hex}
                </div>
            </div>
        )
    }
}


export default DectoHex;