import React from "react";

class BintoDec extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dec: 0, bin: "" };

        this.setBin = this.setBin.bind(this.bin);
    }

    convert = () => {
        this.state.dec = 0;
        const binArr = this.state.bin.split('').reverse();
        // this.splitBin(this.state.bin);
        for (let i = 0; i < binArr.length; i++) {
            if (binArr[i] === "1") {
                this.state.dec += Math.pow(2, i);
            }
        }
        this.setState({ dec: this.state.dec });
    }
    setBin = (e) => {
        this.setState({ bin: e.target.value });
    }
 
    render() {
        return (
            <div>
                <h1>Binary To Decimal</h1>
                <input type="text" value={this.state.bin} onChange={this.setBin} placeholder="0000" />
                <div className="bin">
                    Binary: {this.state.bin}
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


export default BintoDec