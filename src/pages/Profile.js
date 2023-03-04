import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Cookies from 'js-cookie';
import Banner from "./Banner";



const stateBarKeyStyle = {
    display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'15px', color:'#787878', fontWeight:'500', fontFamily: "Open Sans"
}

const stateBarValueStyle = {
    display:'flex', alignItems:'end', justifyContent:'center', flex:1.5, fontSize:'25px', color:'#4D4D4D', fontWeight:'550', fontFamily: "Open Sans"
}

const couponList = [
    { label: 'Coupon1'},
    { label: 'Coupon2'},
    { label: 'Coupon3'}]

const CouponDropDown = () => {
    return (
        <Autocomplete
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
    else landNum = 4
    return `/images/land${landNum}.png`;
}

const GetLevelUrl = (treeCount) => {
    let level;
    if (treeCount === 0) level = 1
    else if (treeCount < 10) level = 2
    else if (treeCount < 100) level = 3
    else level = 4
    return `/images/level${level}.png`;
}


const Profile = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        let access_token =  Cookies.get('access_token');
        fetch('http://localhost:8000/apps/auth/profile', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    console.log(data);

    let numOfTrees = (data)? data.num_of_trees : 0;
    let carbonCredit = (data)? data.carbon_credit : 0;
    let userEmail = (data) ? data.email_address : "";

    const [curTreeCount, setCount] = useState(0);
    let duration = 1000;
    useEffect(() => {
        let intervalId = null;
        let startTime = null;
        const startCount = curTreeCount;

        const incrementCount = (timestamp) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newCount = Math.floor(progress * (numOfTrees - startCount)) + startCount;

            setCount(newCount);

            if (progress < 1) {
                intervalId = requestAnimationFrame(incrementCount);
            }
        };

        intervalId = requestAnimationFrame(incrementCount);

        return () => {
            cancelAnimationFrame(intervalId);
        };
    }, [numOfTrees, duration]);

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
                    {userEmail}
                </div>
            </div>
            <div style={{display:'flex', flex: "0 0 90px", backgroundColor:'#f6f6f6'}}>
                <div style={{flex: '1'}}/>
                <div style={{display:'flex', flex: '1'}}>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            {curTreeCount.toLocaleString()}
                        </div>
                        <div style={stateBarKeyStyle}>
                            TREES
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            <img style={{height: "28px", width: "28px"}} src={GetLevelUrl(numOfTrees)}/>
                        </div>
                        <div style={stateBarKeyStyle}>
                            LEVEL
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            {(carbonCredit).toLocaleString()}
                        </div>
                        <div style={stateBarKeyStyle}>
                            CARBON CREDIT
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                </div>
                <div style={{flex: '1'}}/>
            </div>
            <div style={{display:'flex', flexFlow:'column', flex:'1 0 auto', backgroundSize:'100% 100%', backgroundImage: `url("./images/profileBackground2.png")`}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 130px'}}>
                    <CouponDropDown/>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 400px', overflow:'hidden'}}>
                    <img style={{width:'500px', height:'auto', animation: 'floating 3s ease-in-out infinite'}} src={GetLandUrl(numOfTrees)}/>
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
                </div>
                <div style={{flex:'1', backgroundColor:'blue'}}>
                    Log out
                </div>
            </div>
        </div>
    );
};

export default Profile;
