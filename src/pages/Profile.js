import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Banner from "./Banner";






const Profile = () => {
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

    const stateBarKeyStyle = {
        display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'15px', color:'#787878', fontWeight:'500', fontFamily: "Open Sans"
    }

    const stateBarValueStyle = {
        display:'flex', alignItems:'end', justifyContent:'center', flex:1.5, fontSize:'25px', color:'#4D4D4D', fontWeight:'550', fontFamily: "Open Sans"
    }

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
                <div style={{flex:'1', fontFamily: "Open Sans", fontSize:'12px', color:'#4D4D4D'}}>
                    tabtree@tab.com
                </div>
            </div>
            <div style={{display:'flex', flex: "0 0 90px", backgroundColor:'#f6f6f6'}}>
                <div style={{flex: '1'}}/>
                <div style={{display:'flex', flex: '1'}}>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            1,340
                        </div>
                        <div style={stateBarKeyStyle}>
                            TREES
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            <img style={{height: "28px", width: "28px"}} src="/images/level1.png"/>
                        </div>
                        <div style={stateBarKeyStyle}>
                            LEVELS
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={stateBarValueStyle}>
                            4690
                        </div>
                        <div style={stateBarKeyStyle}>
                            CO2
                        </div>
                        <div style={{flex: '0.3'}}></div>
                    </div>
                </div>
                <div style={{flex: '1'}}/>
            </div>
            <div style={{display:'flex', flexFlow:'column', flex:'1 0 auto', backgroundColor:"white"}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 130px'}}>
                    <CouponDropDown/>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:'0 0 400px', overflow:'hidden'}}>
                    <img style={{height: "800px", width: "800px"}} src="/images/land22.png"/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
