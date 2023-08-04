import React, { Component } from 'react'
import './style.css';
export default class Design extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString(),
        }
    }
    componentDidMount() {
        console.log("makabhosda")
        setInterval(() => {
            let dt = new Date();
            let v = dt.toLocaleTimeString(Intl.DateTimeFormat);
            this.setState({ time: v })
        }, 1000);
        setInterval(() => {
            let dt = new Date();
            this.setState({ date: dt.toDateString() });
        }, 1000 * 60 * 60 * 24);
    }
    render() {
        return (
            <div>
                <nav className="navbar1">
                    <div className="date">
                        <p id="d-first">{this.state.time}</p>
                        <p id="d-second">{this.state.date}</p>
                    </div>
                    <div className="logo">
                        <p id="main">World's News Teller</p>
                        <p id="side">Listen it in your language</p>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search News" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </nav>
            </div >
        )
    }
}