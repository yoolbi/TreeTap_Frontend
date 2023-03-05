import {useEffect, useState} from "react";
import {getAllAdvertisements, getProfileAPIMethod} from "../api/client";
import urlJoin from "url-join";
import Banner from "./Banner";


const Admin = () => {
    const [ads, setAds] = useState([])

    useEffect(() => {
        getAllAdvertisements().then((data) => {
            if (data.status === 401) {
                window.location.replace(
                    urlJoin(process.env.REACT_APP_FRONTEND_URL, "/")
                );
            } else if (data.status === 200) {
                console.log(data);
            }
        });
    }, [])

    return (
        <div>
            <Banner/>
            <div>
                hello.
            </div>
        </div>
    )
}
export default Admin;