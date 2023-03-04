import React from "react";

const Profile = () => {

    return (
        <div style={{position:'absolute', display:'flex', flexFlow:"column", width:"100%", height:"100%", backgroundColor:'yellow'}}>
            <div style={{flex:"0 0 50px", backgroundColor:'gray'}}>

            </div>
            <div style={{flex: "0 0 160px", backgroundColor:"white"}}>
                bg here
            </div>
            <div style={{display:'flex', flex: "0 0 90px", backgroundColor:"#431412"}}>
                <div style={{flex: '1'}}/>
                <div style={{display:'flex', flex: '0.8', backgroundColor:"#123432"}}>
                    <div style={{display:'flex', flexFlow:'column', flex:'1', backgroundColor:'white'}}>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:2, fontSize:'20px', backgroundColor:'gray'}}>
                            1,340
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'12px'}}>
                            TREES
                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1'}}>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:2, backgroundColor:'gray'}}>
                            <img style={{height: "28px", width: "28px"}} src="/images/level1.png"/>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'12px'}}>
                            LEVELS
                        </div>
                    </div>
                    <div style={{display:'flex', flexFlow:'column', flex:'1', backgroundColor:'white'}}>
                        <div style={{flex:2, backgroundColor:'gray'}}>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1, fontSize:'12px'}}>
                            CO2
                        </div>
                    </div>
                </div>
                <div style={{flex: '1'}}/>
            </div>
            <div style={{flex:1, backgroundColor:"#431234"}}>

            </div>
        </div>
    );
};

export default Profile;
