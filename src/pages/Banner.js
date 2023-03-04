import React from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Banner = () => {

    return (
        <div style={{width: "100%", height: "60px", border: "1px solid #CBCBCB", display: "flex", justifyContent: "space-between"}}>
            <Link to="/Home">
                <img
                    src="/images/logo.png"
                    style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: "100px",
                        marginTop: "5px"
                    }}/>
            </Link>
            <div style={{display: "flex"}}>
                <Link to="/Company"><div style={{color: "black", fontFamily: "Open Sans", fontSize: "18px", marginRight: "40px", marginTop: "20px"}}>Request Ads</div></Link>
                <Link to="/Profile"><AccountCircleOutlinedIcon style={{width: "40px", height: "40px", color: "black", marginRight: "100px", marginTop: "10px"}}/></Link>
            </div>

        </div>
    );
};

export default Banner;