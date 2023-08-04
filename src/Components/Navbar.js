import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black',color:'red'}}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="/u">News Teller</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav" style={{color:'red'}}>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/india">India</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/Dutch">Dutch</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/United States">United States</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Ukraine">Ukraine</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/Japan">Japan</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/South Korea">South Korea</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}