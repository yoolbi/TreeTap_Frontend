import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import urlJoin from "url-join";

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
    const handleClose = () => setOpen(false);

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
                        <CardMedia
                            sx={{ height: 300 }}
                            image={urlJoin(
                                process.env.REACT_APP_BACKEND_URL,
                                `/apps/advertisement/images?file_name=${encodeURIComponent(selectedAd.advertisement_image)}`,

                            )}
                            title="green iguana"
                        />
                        <CardContent>
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
                                onClick={() => window.open(`https://www.${selectedAd.website}`, '_blank')}
                                sx={{margin: "auto"}}
                            >
                                PLANT TREE
                            </Button>
                        </CardActions>

                    </Card>

                </Box>
            </Modal>
        </div>
    )
};

export default AdModal;

