import React, { Component } from 'react'
import EpiClockComponent from './EpiClockComponent'

class MainComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mainComponent">
                <div>
                    <div>
                        <p>Last Epinepherine</p>
                        <EpiClockComponent/>
                        <button>Admin Epi</button>
                    </div>
                    <div>
                        <h2>CPR</h2>
                        <button>Start</button>
                        <button>Stop</button>
                        <h2>Events</h2>
                        <button>Pulse Check</button>
                        <button>ROSC</button>
                        <button>TOD</button>
                    </div>
                    <div>
                        <h2>Rhythm</h2>
                        <button>Asystole</button>
                        <button>V-Fib</button>
                        <button>SVT</button>
                        <button>NSR</button>
                        <button>Tachycardia</button>
                        <button>Bradycardia</button>
                        <button>A-Fib</button>
                        <button>A-Flutter</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Notes</h2>
                        <textarea rows="5" cols="30"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;