import React, {useState, useEffect} from "react";
import Banner from "./Banner";
import {Grid, Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import {getAdsAPIMethod} from "../api/client";
import urlJoin from "url-join";
import AdModal from "./AdModal";

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (ad) => {
        setSelectedAd(ad);
        setOpen(true);
    }

    const [ads, setAds] = useState([]);
    const [selectedAd, setSelectedAd] = useState({});

    useEffect(() => {
        getAdsAPIMethod().then((data) => {
            if (data.status === 401) {
                window.location.replace(
                    urlJoin(process.env.REACT_APP_FRONTEND_URL, "/Login")
                );
            } else if (data.status === 200) {
                setAds(data.body);
            }
        })
    }, []);

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Banner/>
            <Box sx={{width: "80%"}}
                style={{paddingTop: "60px", margin: "auto",}}>
                <Grid container spacing={5} justifyContent="center">
                    {ads.map((data, index) => (
                        <Grid item key={index}>
                            <Card sx={{ width: 300 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={urlJoin(
                                        process.env.REACT_APP_BACKEND_URL,
                                        `/apps/advertisement/images?file_name=${encodeURIComponent(data.advertisement_image)}`,

                                    )}
                                    title="green iguana"
                                />
                                <CardContent sx={{backgroundColor: data.already_done && '#DDDDDD'}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.company_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 80}}>
                                        {data.advertisement_content.slice(0, 150)}...
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{marginTop: "5px"}}>
                                        Coupon: {data.coupon_info.slice(0, 30)}...
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{backgroundColor: data.already_done && '#DDDDDD'}}>
                                    <Button size="small" onClick={() => handleOpen(data)}>LEARN MORE</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div style={{padding: '20px'}}></div>
            <AdModal open={open} setOpen={setOpen} selectedAd={selectedAd}/>
        </div>
    );
};

export default Home;
