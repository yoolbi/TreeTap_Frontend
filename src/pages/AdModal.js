import React, {useState, useRef} from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import urlJoin from "url-join";
import {postTreeAPIMethod} from "../api/client";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "70%",
    borderRadius: "10px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const AdModal = ({open, setOpen, selectedAd}) => {
    const handleClose = () => {
        setPlant(false);
        setOpen(false);
    }
    const [plant, setPlant] = useState(false);
    const contentRef = useRef(null);

    const handleClickPlant = () => {
        window.open(`https://www.${selectedAd.website}`, '_blank')
        postTreeAPIMethod(selectedAd._id).then((data) => {
            console.log(data)
            if (data.status === 200) {
                setPlant(true);
                contentRef.current.scrollTop = 0;
            }
        })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
                        {plant &&
                            (<div>
                                <div style={{fontFamily: "Open Sans", fontSize: "20px", textAlign: "center", marginTop: "100px"}}>
                                    You Planted <b>{selectedAd.trees_per_click}</b> Trees!
                                </div>
                                <div style={{width: "100%", height : "0", paddingBottom: "100%", position: "relative"}}>
                                    <iframe src="https://giphy.com/embed/UrzDYZQsBSLH4Isq1H"
                                            style={{position: "absolute", width: "100%", height:"100%", pointerEvents: "none"}} frameBorder="0" className="giphy-embed" ></iframe>
                                </div>
                            </div>)}
                        {!plant && (<>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={urlJoin(
                                    process.env.REACT_APP_BACKEND_URL,
                                    `/apps/advertisement/images?file_name=${encodeURIComponent(selectedAd.advertisement_image)}`,

                                )}
                                title="green iguana"
                            />
                            <CardContent ref={contentRef}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {selectedAd.company_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {selectedAd.advertisement_content}
                                </Typography>
                                <Typography variant="subtitle2" sx={{marginTop: "5px"}}>
                                    Coupon: {selectedAd.coupon_info}
                                </Typography>
                                <Typography variant="subtitle2" sx={{marginTop: "5px"}}>
                                    NGO: {selectedAd.ngo}
                                </Typography>
                                <Typography variant="subtitle2" sx={{marginTop: "5px"}}>
                                    Trees per Click: {selectedAd.trees_per_click}
                                </Typography>
                                <Typography variant="subtitle2" sx={{marginTop: "5px"}}>
                                    Trees Planted: {selectedAd.trees_planted}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="success"
                                    onClick={handleClickPlant}
                                    sx={{margin: "auto"}}
                                >
                                    PLANT TREE
                                </Button>
                            </CardActions>
                            </>)}
                    </Card>
                </Box>
            </Modal>
        </div>
    )
};

export default AdModal;

