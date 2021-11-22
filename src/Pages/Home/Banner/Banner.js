import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bg})`

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile
                            <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'grey' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione consectetur omnis nihil aut. Recusandae placeat eius qui sit dolor.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/appointment"><Button variant="contained" sx={{ backgroundColor: 'rgb(24,210,187)' }}>Get Appointment</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
                            <AccessTimeIcon sx={{ fontSize: '50px' }}></AccessTimeIcon>
                            <Box sx={{ textAlign: 'left', ml: 2 }}>
                                <Typography>Opening Hours</Typography>
                                <Typography>Lorem ipsum dolor sit amet.</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
                            <LocationOnIcon sx={{ fontSize: '50px' }}></LocationOnIcon>
                            <Box sx={{ textAlign: 'left', ml: 2 }}>
                                <Typography>Visit Our Location</Typography>
                                <Typography>Lorem ipsum dolor sit amet.</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
                            <CallIcon sx={{ fontSize: '50px' }}></CallIcon>
                            <Box sx={{ textAlign: 'left', ml: 2 }}>
                                <Typography>Contact us now</Typography>
                                <Typography>Lorem ipsum dolor sit amet.</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;