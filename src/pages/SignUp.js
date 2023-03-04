import React, {useState} from "react";
import { Link } from "react-router-dom";
import backgroundImage from './signup_background.png';
import {Box, TextField, Typography, Button} from "@mui/material";
import urlJoin from "url-join";
import {signUpAPIMethod} from "../api/client";

const SignUpBanner = () => {
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
    const [confirmCheck, setConfirmCheck] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword')
        });

        if (data.get('password') !== data.get('confirmPassword')) {
            setConfirmCheck(false);
        } else {
            setConfirmCheck(true);
            signUpAPIMethod(data.get('email'), data.get('password')).then((data) => {
                console.log(data);
                if (data.status === 201) {
                    window.location.replace(
                        urlJoin(process.env.REACT_APP_FRONTEND_URL, "/Login")
                    );
                }
            })
        }
    };

    return (
        <div style={{width: "100%", height: "100%"}}>
            <SignUpBanner/>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        width: "1000px",
                        height: "500px",
                        backgroundColor: "white",
                        opacity: "0.9",
                        margin: "auto",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <img style={{width: "60px", height: "60px"}} src="/images/logo.png"/>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Link to="/Login">
                            {"Do you have an account? Login"}
                        </Link>
                        {!confirmCheck && <div style={{color: "red"}}>Password is incorrect</div>}
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
