import {useEffect, useState} from "react";
import {getAllAdvertisements, getProfileAPIMethod} from "../api/client";
import urlJoin from "url-join";
import Banner from "./Banner";

function onApproveClick(adId){
    console.log('Button clicked for ad ID:', adId);
}

const loadAds = (data) => {
    console.log(data);
    if (!data) return;

    let htmlElement = document.getElementById("adminHtml");
    data.forEach((ad) => {

        let item =
                `<div style="flex:1; display:flex; align-items:center; justify-content:center">
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${ad?._id}</div>
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${ad?.company_name}</div>
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${ad?.website}</div>
                    <div style="flex: 0.3; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${ad?.trees_per_click}</div>
                    <div style="flex:0.5; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${ad?.approved}</div>
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px"><input></div>
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px">${(ad.ngo)? ad.ngo : `<input>`}</div>
                    <div style="flex: 1; display:flex; align-items:center; justify-content:center; margin-bottom: 5px"><button id="${ad._id}">Approve</button></div>
                </div>`
        htmlElement.innerHTML += item;
        // console.log(ad._id);
        const approveButton = document.getElementById(ad._id);
        console.log(approveButton);

        approveButton.addEventListener('click', function(){
            console.log("abc");
        });
    })
}

const Admin = () => {
    const [ads, setAds] = useState([])

    useEffect(() => {
        getAllAdvertisements().then((data) => {
            if (data.status === 401) {
                window.location.replace(
                    urlJoin(process.env.REACT_APP_FRONTEND_URL, "/")
                );
            } else if (data.status === 200) {
                setAds(data.body);
            }
        });
    }, [])

    console.log(ads);
    loadAds(ads);
    let ad1 = ads[0];
    return (
        <div>
            <Banner/>
            <div style={{display:'flex', flexFlow:'column', fontSize:'12px'}}>
                <div style={{flex:'0 0 30px', display:'flex', alignItems:'center', justifyContent:'center',}}>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>id</div>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>companyName</div>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>website</div>
                    <div style={{flex: 0.3, display:'flex', alignItems:'center', justifyContent:'center'}}>trees/click</div>
                    <div style={{flex: 0.5, display:'flex', alignItems:'center', justifyContent:'center'}}>approved</div>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>add coupons</div>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>NGO</div>
                    <div style={{flex: 1, display:'flex', alignItems:'center', justifyContent:'center'}}>Approve</div>
                </div>
                <div style={{flex:'0 0 2px', backgroundColor:'black'}}></div>
                <div id="adminHtml" style={{flex:'1', display:'flex', flexFlow:'column'}}>

                </div>
            </div>
        </div>
    )
}
export default Admin;