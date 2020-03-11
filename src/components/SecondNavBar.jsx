import React, { Component } from 'react'

class SecondNavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarResponsive">  
                    <button className="navbar-brand text-primary border border-dark bg-dark btn-outline-dark mr-auto">Pt Arrive</button>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mr-2" >
                            <h2 className="navbar-brand text-dark">Code Start</h2>
                        </li>
                        <li className="nav-item mr-4">
                            <h2 className="text-dark">00:00:00</h2>
                        </li>
                        <li className="nav-item mr-2">
                            <h2 className="navbar-brand text-dark">Last Epinephrine</h2>
                        </li>
                        <li className="nav-item mr-4">
                            <h2 className="text-dark">00:00:00</h2>
                        </li>
                        <li className="nav-item mr-2">
                            <h2 className="navbar-brand text-dark">Current CPR</h2>
                        </li>
                        <li className="nav-item mr-4">
                            <h2 className="text-dark">00:00:00</h2>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SecondNavBar;