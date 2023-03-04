import React from "react";
import Banner from "./Banner";
import {Grid, Box, Stack, Card, Paper, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Banner/>
            {/*<Grid container spacing={2}>*/}
            {/*    <Grid item xs={12} sm={6} md={4}>*/}
            {/*        <Card sx={{ minWidth: 345 }}>*/}
            {/*            <CardMedia*/}
            {/*                sx={{ height: 140 }}*/}
            {/*                image="/images/logo.png"*/}
            {/*                title="green iguana"*/}
            {/*            />*/}
            {/*            <CardContent>*/}
            {/*                <Typography gutterBottom variant="h5" component="div">*/}
            {/*                    Lizard*/}
            {/*                </Typography>*/}
            {/*                <Typography variant="body2" color="text.secondary">*/}
            {/*                    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
            {/*                    species, ranging across all continents except Antarctica*/}
            {/*                </Typography>*/}
            {/*            </CardContent>*/}
            {/*            <CardActions>*/}
            {/*                <Button size="small">Share</Button>*/}
            {/*                <Button size="small">Learn More</Button>*/}
            {/*            </CardActions>*/}
            {/*        </Card>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={6} md={4}>*/}
            {/*        <Card>*/}
            {/*            <CardContent>*/}
            {/*                /!* Card content goes here *!/*/}
            {/*            </CardContent>*/}
            {/*        </Card>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} sm={6} md={4}>*/}
            {/*        <Card>*/}
            {/*            <CardContent>*/}
            {/*                /!* Card content goes here *!/*/}
            {/*            </CardContent>*/}
            {/*        </Card>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            <Stack direction={{ sm: 'column', md: 'row' }}
                   justifyContent="center"
                   alignItems="center"
                   spacing={{ xs: 1, sm: 2, md: 4 }}
                   sx={{width: "75%"}}
                   style={{border: "1px solid red", paddingTop: "20px"}}>
                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>

                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>


                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
                <Item>
                    <Card sx={{ minWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/logo.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Item>
            </Stack>
        </div>
    );
};

export default Home;
