import React, {useState} from "react";
import Banner from "./Banner";
import {Box, Button, TextField, Typography, Collapse, Alert, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Company = () => {
    const [openAlert, setOpenAlert] = useState(false);

    const handleSubmitJoin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            website: data.get('website'),
            coupon: data.get('coupon'),
            trees: data.get('trees'),
            content: data.get('content'),
            image: data.get('image')
        });
        setOpenAlert(true);
    };

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Banner />
            <Collapse in={openAlert}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    A confirmation email has been sent to your email address. Our employee will be in contact with you soon. Thank you for joining us.
                </Alert>
            </Collapse>
            <div style={{display: "flex", flexDirection: "column", height: "calc(100vh - 90px)"}}>
                <div
                    style={{
                        width: "500px",
                        height: "100%",
                        backgroundColor: "white",
                        opacity: "0.9",
                        margin: "auto",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Typography component="h2" variant="h2" fontFamily="open sans" fontWeight="bold" color="#0D6F12">
                        JOIN US
                    </Typography>
                    <Box component="form" onSubmit={handleSubmitJoin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Company Name"
                            name="name"
                            variant="standard"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="website"
                            label="Company/Product Website"
                            name="website"
                            variant="standard"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="coupon"
                            label="Coupon Info"
                            name="coupon"
                            variant="standard"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="trees"
                            label="Number of Trees per Click"
                            name="trees"
                            variant="standard"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            label="Advertisement Content"
                            multiline
                            rows={4}
                            name="content"
                        />
                        <Button
                            variant="outlined"
                            color="success"
                            component="label"
                            fullWidth
                            sx={{ mt: 1, mb: 1}}
                        >
                            UPLOAD ADVERTISEMENT IMAGE
                            <input hidden accept="image/*" type="file" id="image" name="image"/>
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                sx={{ mt: 1, mb: 1}}
                            >
                                REQUEST
                            </Button>
                        </div>

                    </Box>
                </div>
                <div
                    style={{
                        width: "90%",
                        height: "125px",
                        backgroundColor: "#ECECEC",
                        overflowY: "auto",
                        margin: "auto",
                        padding: "10px",
                        fontFamily: "Open Sans",
                }}>
                    Sponsor your ad on treetap and gain these benefits!
                    <ol>
                        <li>Increased brand image: By sponsoring tree-planting initiatives instead of just paying for ad space, your business can improve its brand image and reputation as a socially responsible and environmentally conscious company.</li>
                        <li>Appeal to eco-conscious consumers: Sponsoring ads on TreeTap can help your business appeal to eco-conscious consumers who value sustainability and environmental responsibility, and are more likely to support businesses that share their values.</li>
                        <li>Differentiation in a competitive market: With more and more businesses promoting sustainability and environmental responsibility, sponsoring ads on TreeTap can help your business stand out in a competitive market and differentiate itself from competitors.</li>
                        <li>Cost-effective advertising: Sponsoring ads on TreeTap is a cost-effective way to advertise your business. While traditional advertising methods like Google Ads can cost several dollars per click, TreeTap only charges $1 per tree planted. By investing in TreeTap,
                            your business can reach a wider audience without breaking the bank, while also making a positive impact on the environment. methods like Google Ads can cost several dollars per click, TreeTap only charges $1 per tree planted. By investing in TreeTap,
                            your business can reach a wider audience without breaking the bank, while also making a positive impact on the environment.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Company;