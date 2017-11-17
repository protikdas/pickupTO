import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        let navbarLeftClasses;
        if (!this.props.signedIn) {
            navbarLeftClasses = "navbar-left invisible"
        } else {
            navbarLeftClasses = "navbar-left"
        }
        return(
            <div className="navbar-container"> 
                <div className="brand">
                    PickUpTO
                </div>
                <div className="nav-options-container">
                <div className={navbarLeftClasses}>
                    <Link className="pickup navbar-option" to="/">Pick-Up</Link>
                    <Link className="players navbar-option" to="/">Players</Link>
                </div>
                <div className="navbar-right pull-right">
                    <Link className="signup navbar-option" to="/signup">Sign Up</Link>
                    <Link className="login navbar-option" to="/">Log In</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar;