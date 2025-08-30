import React from "react";
import logo from "../../logo.svg"
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        This page upload to <a className='App-link' href='https://github.com' target='_blank' rel='noopener noreferrer'>GitHub.com</a> with Git Bash
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/MaSidrenko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub.com/MaSidrenko
                    </a>
                </header>
            </div>
        )
    }
}

export default Header;