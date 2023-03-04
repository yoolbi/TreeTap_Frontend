import React from "react";
import Banner from "./Banner";

const LoginBanner = () => {
    return (
        <div style={{width: "100%", height: "60px", border: "1px solid #CBCBCB"}}>
            <img
                src="/images/logo.png"
                style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "100px",
                    marginTop: "5px"
                }}/>
        </div>
    );
}

const Login = () => {

    return (
        <div>
            <LoginBanner/>
            <img src="/images/signup_background.png"/>
        </div>
    );
};

export default Login;
