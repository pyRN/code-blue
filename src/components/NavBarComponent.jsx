import React, { Component } from 'react'
import { Link} from 'react-router-dom';

import MainClockComponent from './MainClockComponent'

class NavBarComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top sticky-top">
                    <h2 className="navbar-brand">Code Blue</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"    
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <button>Pt Arrive</button>
                        <MainClockComponent/>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" >
                                <Link className="nav-link linkStyle" to="/">Main</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkStyle" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkStyle" to="/procedures">Procedures</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkStyle" to="/meds">Medications</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        );
    }
}

export default NavBarComponent;