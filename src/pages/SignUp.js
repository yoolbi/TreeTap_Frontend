import React from "react";

const SingUpBanner = () => {
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

const SignUp = () => {

    return (
        <div>
            <SingUpBanner/>
            <img src="/images/signup_background.png"/>
        </div>
    );
};

export default SignUp;
