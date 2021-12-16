import "./login.css"
import Lock from '@material-ui/icons/Lock';
import Person from '@material-ui/icons/Person';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import { useRef,useContext } from "react";

export const Login = () => {
    const email=useRef();
    const password=useRef();

    const {user,isFetching,error,dispatch}=useContext(AuthContext);

    const handleClick=(e)=>{  
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch);
    };

    return (
        <div className="login">
            <form className="loginWrapper" onSubmit={handleClick}>
            <div className="loginFormUser">
                <Person style={{fontSize:"30px"}}/>
                <input type="text" className="loginUsername" placeholder="email" ref={email} />
            </div>
            <div className="loginFormPassword">
                <Lock style={{fontSize:"30px"}}/>
                <input type="password" className="loginPassword" placeholder="password" ref={password}/>
            </div>
            <button className="loginButton" type="submit">Login</button>
            </form>

        </div>
    )
}

