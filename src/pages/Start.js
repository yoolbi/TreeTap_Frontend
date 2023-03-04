import React from "react";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";

const Start = () => {

    return (
        <div style={{width: "100%", height: "100%"}}>
            <div style={{width: "100%", height: "70px"}}>
                <img
                    src="/images/logo.png"
                    style={{
                        width: "55px",
                        height: "55px",
                        marginLeft: "100px",
                        marginTop: "20px"
                    }}/>
            </div>
            <div style={{width: "100%", height: "100%", display: "flex"}}>
                <div style={{width: "45%", height: "100%", marginLeft: "150px", marginTop: "200px"}}>
                    <div style={{fontFamily: "Open Sans", color: "#0D6F12", fontSize: "96px", fontWeight: "bold"}}>TreeTap</div>
                    <div style={{fontFamily: "Sorts Mill Goudy", fontSize: "36px"}}>"Click for trees, make a change with ease!"</div>
                    <div style={{fontFamily: "Open Sans", fontSize: "20px", marginTop: "5px"}}>TreeTap is a sustainable advertising platform that connects businesses with reforestation organizations to promote eco-friendly practices and encourage reforestation efforts.</div>
                    <Link to="/Login" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="success" style={{marginTop: "20px"}}>
                            START PLANTING
                        </Button>
                    </Link>

                </div>
                <img style={{height: "740px", width: "800px"}} src="/images/start_logo.png"/>
            </div>
            <div style={{marginLeft: "100px", marginBottom: "10px", fontFamily: "Open Sans", fontSize: "20px"}}>Our Partners</div>
            <div style={{width: "100%", height: "100px", marginLeft: "100px"}}>
                <img src="/images/partners.png"/>
            </div>


        </div>
    );
};

export default Start;
