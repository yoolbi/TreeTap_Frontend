import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Cookies from 'js-cookie';
import Banner from "./Banner";
import {getProfileAPIMethod, getUserCouponAPIMethod} from "../api/client";
import urlJoin from "url-join";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const stateBarKeyStyle = {
    display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'15px', color:'#787878', fontWeight:'500', fontFamily: "Open Sans", whiteSpace: 'nowrap'
}

const stateBarValueStyle = {
    display:'flex', alignItems:'end', justifyContent:'center', flex:1.5, fontSize:'25px', color:'#4D4D4D', fontWeight:'550', fontFamily: "Open Sans"
}

const CouponDropDown = (param) => {
    let couponList = []
    param.couponList.forEach((data) => {
        couponList.push(data.company_name + " : " + data._id);
    })
    return (
        <Autocomplete
            noOptionsText={"No coupons"}
            disablePortal
            id="combo-box-demo"
            options={couponList}
            sx={{ width: 450 }}
            renderInput={(params) => <TextField {...params} label="Coupons" />}
        />
    );
}

const GetLandUrl = (treeCount) => {
    let landNum;
    if (treeCount === 0) landNum = 1
    else if (treeCount < 10) landNum = 2
    else if (treeCount < 100) landNum = 3
    else if (treeCount < 1000) landNum = 4
    else landNum = 5
    return `/images/land${landNum}.png`;
}

const GetLevelUrl = (treeCount) => {
    let level;
    if (treeCount < 10) level = 1
    else if (treeCount < 100) level = 2;
    else if (treeCount < 1000) level = 3;
    else level = 4
    return `/images/level${level}.png`;
}

const OnMouseOverCarbonCredit = () => {

}

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));


const Profile = () => {
    const [profile, setProfile] = useState({
        numOfTrees: 0,
        carbonCredit: 0,
        userEmail: "",
        userCouponCodes: [],
        ready: false
    });

    const [coupon, setCoupon] = useState({
        coupons: [],
        ready: false,
    })

    const Logout = () => {
        Cookies.set('access_token', "");
    }

    useEffect(() => {
        getProfileAPIMethod().then((data) => {
            if (data.status === 401) {
                window.location.replace(
                    urlJoin(process.env.REACT_APP_FRONTEND_URL, "/")
                );
            } else {
                setProfile({
                    numOfTrees: data.body.num_of_trees,
                    carbonCredit: data.body.carbon_credit,
                    userEmail: data.body.email_address,
                    userCouponCodes: data.body.user_coupons,
                    ready: true,
                })
            }
        })
    }, [])

    if (profile.ready && !coupon.ready)
    {
        if (profile.userCouponCodes.length > 0)
        {
            let codes = profile.userCouponCodes.map((pair) => pair.advertisement_id)
            getUserCouponAPIMethod(codes).then((data) => {
                if (data.status === 401) {
                    window.location.replace(
                        urlJoin(process.env.REACT_APP_FRONTEND_URL, "/")
                    );
                } else {
                    setCoupon({
                        coupons: data.body,
                        ready: true
                    })
                }
            })
        }
    }
    const [count, setCount] = useState({
        tree: 0,
        carbon: 0,
    });
    let duration = 500;

    useEffect(() => {
        let intervalId = null;
        let startTime = null;
        const startTreeCount = count.tree;
        const startCarbonCount = count.carbon;

        const incrementCount = (timestamp) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newTreeCount = Math.floor(progress * (profile.numOfTrees - startTreeCount)) + startTreeCount;
            const newCarbonCount = Math.floor(progress * (profile.carbonCredit - startCarbonCount)) + startCarbonCount;

            setCount({
                tree: newTreeCount,
                carbon: newCarbonCount,
            });

            if (progress < 1) {
                intervalId = requestAnimationFrame(incrementCount);
            }
        };

        intervalId = requestAnimationFrame(incrementCount);

        return () => {
            cancelAnimationFrame(intervalId);
        };
    }, [profile.numOfTrees, duration]);

    return (
        <div style={{position:'absolute', display:'flex', flexFlow:"column", width:"100%", height:"100%"}}>
            <Banner></Banner>
            <div style={{display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', flex: "0 0 160px", backgroundSize:'100% 100%', backgroundRepeat:'no-repeat',  backgroundImage: `url("./images/defaultBackground.jpg")`}}>
                <div style={{flex:'1'}}></div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'4'}}>
                    <div style={{width:'100px', height:'100px', borderRadius:'50%', overflow:'hidden'}}>
                        <img style={{height: "100%", width: "100%"}} src="/images/defaultProfile.png"/>
                    </div>
                </div>
                <div style={{flex:'1', fontFamily: "Open Sans", fontSize:'15px', color:'#4D4D4D'}}>
                    {profile.userEmail}
                </div>
            </div>
            <div style={{display:'flex', flex: "0 0 90px", backgroundColor:'#f6f6f6'}}>
                <div style={{flex: '1'}}/>
                <div style={{display:'flex', flex: '1'}}>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            {count.tree.toLocaleString()}
                        </div>
                        <div style={stateBarKeyStyle}>
                            TREES
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            <img style={{height: "28px", width: "28px"}} src={GetLevelUrl(profile.numOfTrees)}/>
                        </div>
                        <div style={stateBarKeyStyle}>
                            LEVEL
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            {count.carbon.toLocaleString()}
                        </div>
                        <div style={stateBarKeyStyle}>
                            CARBON CREDIT&nbsp;
                            <LightTooltip title="kg/year">
                                <HelpOutlineIcon color="primary" sx={{fontSize:'small'}}></HelpOutlineIcon>
                            </LightTooltip>
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                </div>
                <div style={{flex: '1'}}/>
            </div>
            <div style={{display:'flex', flexFlow:'column', flex:'1 0 auto', backgroundSize:'100% 100%', backgroundImage: `url("./images/profileBackground2.png")`}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 130px'}}>
                    <CouponDropDown couponList={coupon.coupons}/>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 400px', overflow:'hidden'}}>
                    <img style={{width:'500px', height:'auto', animation: 'floating 3s ease-in-out infinite'}} src={GetLandUrl(profile.numOfTrees)}/>
                    <style>
                    {`
                      @keyframes floating {
                        0% {
                          transform: translate(0, 0);
                        }
                        50% {
                          transform: translate(0, -10px);
                        }
                        100% {
                          transform: translate(0, 0);
                        }
                      }
                    `}
                    </style>
                    <div style={{position:'fixed', bottom:"0", right:'30px', margin:'10px'}}>
                        <Link to={'/'}><div onClick={Logout} style={{color:'gray'}}>Log out</div></Link>
                    </div>
                    <div style={{position:'fixed', bottom:"0", right:'105px', margin:'10px'}}>
                        <Link to={'/Admin'}><div style={{color:'gray'}}>Admin</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
