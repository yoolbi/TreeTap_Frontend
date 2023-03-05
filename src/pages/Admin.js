import {useEffect, useState} from "react";
import {getAllAdvertisements, getProfileAPIMethod} from "../api/client";
import urlJoin from "url-join";
import Banner from "./Banner";


const loadAds = (data) => {
    console.log(data);
    if (!data) return;

    let htmlElement = document.getElementById("adminHtml");
    data.forEach((ad) => {
        let item = `<div style={{flex: 1}}>{ad.company_name}</div>
                    <div style={{flex: 1}}>{ad.website}</div>
                    <div style={{flex: 1}}>{ad._id}</div>
                    <div style={{flex: 1}}><input></input></div>
                    <div style={{flex: 1}}><button>Approve</button></div>
                </div>`
        htmlElement.innerhtml += item;
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
                    <div style={{flex: 1}}>companyName</div>
                    <div style={{flex: 1}}>website</div>
                    <div style={{flex: 1}}>coupon</div>
                    <div style={{flex: 1}}>NGO</div>
                    <div style={{flex: 1}}>Approve</div>
                </div>
                <div style={{flex:'0 0 2px', backgroundColor:'black'}}></div>
                <div id="adminHtml" style={{flex:'1', display:'flex', alignItems:'center', justifyContent:'center'}}></div>
            </div>
        </div>
    )
}
export default Admin;