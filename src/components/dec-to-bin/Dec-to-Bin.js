import React from "react";
import "./Dec-to-Bin.css";

class DectoBin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dec: "", bin: "" };

        this.setDec = this.setDec.bind(this.dec);
    }
    convert = () => {
        this.state.bin = "";
        let tempDec = this.state.dec;
        for (let i = 0, tempBin = Math.floor(this.state.dec % 2); i < this.state.dec; this.state.dec = Math.floor(this.state.dec / 2), tempBin = this.state.dec % 2) {
            this.state.bin += tempBin;
        }
        this.revers(this.state.bin);
        this.setState({ dec: this.state.dec = tempDec });
    }
    setDec = (e) => {
        this.setState({ dec: e.target.value });
    }
    revers = (revBin) => {
        console.log(this.state.bin);
        this.state.bin = revBin.split('').reverse().join('');
        console.log(this.state.bin);
        this.setState({ bin: this.state.bin });
    }
    render() {
        return (
            <div>
                <h1>Decimal To Binary</h1>
                <input type="text" value={this.state.dec} onChange={this.setDec} placeholder="0" />
                {/* <br /> */}
                    <div className="dec">
                        Decimal: {this.state.dec}
                    </div>
                <div className="converter">
                    {/* <br /> */}
                    <button onClick={this.convert}>Convert</button>
                </div>
                    <div className="bin">
                        Binary: {this.state.bin}
                    </div>
            </div>
        )
    }
}

export default DectoBin;