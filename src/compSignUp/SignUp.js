import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return(
            <div className="sign-up-container">
                <h1 id="sign-up-header">Please Sign Up</h1>
                <form className="sign-up-form">
                    <input className="sign-up-input" spellCheck="false" type="text" placeholder="Name" autoFocus={true} />
                    <input className="sign-up-input" spellCheck="false" type="text" placeholder="Username" />
                    <input className="sign-up-input" spellCheck="false" type="password" placeholder="Password" />
                    <br/>
                    <br/>
                    <button className="sign-up-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;