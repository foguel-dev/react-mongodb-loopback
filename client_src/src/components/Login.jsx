import React from 'react'
import './login.css';

class Login extends React.Component{

    render(){
        return(
            <React.Fragment>
                <form className="login">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                </form>
            </React.Fragment>
        );

    }
}

export default Login