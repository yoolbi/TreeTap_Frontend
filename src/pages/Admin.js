import { useEffect, useState } from "react";
import {getAllAdvertisements, postAdsApproveAPIMethod} from "../api/client";
import urlJoin from "url-join";
import Banner from "./Banner";

const approveAd = (adId, ngo, coupon) => {
    console.log(`Approving ad with ID: ${adId}`);
    console.log(ngo, JSON.parse(coupon), adId)
    postAdsApproveAPIMethod(adId, ngo, JSON.parse(coupon)).then((data) => {
        console.log(data)
    })
};

const Admin = () => {
    const [ads, setAds] = useState([]);

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
    }, []);

    const loadAds = () => {
        return ads.map((ad) => (
            <div
                key={ad._id}
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <div style={{ flex: 1, marginBottom: 5 }}>{ad._id}</div>
                <div style={{ flex: 1, marginBottom: 5 }}>{ad.company_name}</div>
                <div style={{ flex: 1, marginBottom: 5 }}>{ad.website}</div>
                <div style={{ flex: 0.3, marginBottom: 5 }}>{ad.trees_per_click}</div>
                <div style={{ flex: 0.5, marginBottom: 5 }}>{ad.approved}</div>
                <div style={{ flex: 1, marginBottom: 5 }}><input id={`coupon${ad._id}`}/></div>
                <div style={{ flex: 1, marginBottom: 5 }}>{ad.ngo ? ad.ngo : <input id={`ngo${ad._id}`}/>}</div>
                <div style={{ flex: 1, marginBottom: 5 }}><button onClick={() => approveAd(ad._id, document.getElementById(`ngo${ad._id}`).value, document.getElementById(`coupon${ad._id}`).value)}>Approve</button></div>
            </div>
        ));
    };

    return (
        <div>
            <Banner />
            <div style={{ display: "flex", flexFlow: "column", fontSize: "12px", marginLeft: "10px" }}>
                <div
                    style={{
                        flex: "0 0 30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ flex: 1 }}>id</div>
                    <div style={{ flex: 1 }}>companyName</div>
                    <div style={{ flex: 1 }}>website</div>
                    <div style={{ flex: 0.3 }}>trees/click</div>
                    <div style={{ flex: 0.5 }}>approved</div>
                    <div style={{ flex: 1 }}>add coupons</div>
                    <div style={{ flex: 1 }}>NGO</div>
                    <div style={{ flex: 1 }}>Approve</div>
                </div>
                <div style={{ flex: "0 0 2px", backgroundColor: "black" }}></div>
                <div style={{ flex: "1", display: "flex", flexFlow: "column" }}>
                    {loadAds()}
                </div>
            </div>
        </div>
    );
};

export default Admin;
