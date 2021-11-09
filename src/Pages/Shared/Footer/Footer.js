import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import footerBg from '../../../images/footer-bg.png'

const Footer = () => {
    const bg = {
        background: `url(${footerBg})`
    }
    return (
        <Container style={bg}>
            <Grid container spacing={2} sx={{ textAlign: 'start', fontWeight: 700 }}>
                <Grid item xs={6} md={3}></Grid>
                <Grid item xs={6} md={3}>Services</Grid>
                <Grid item xs={6} md={3}>Oral Health</Grid>
                <Grid item xs={6} md={3}>Our Address</Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3} sx={{ textAlign: 'start' }}>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'start' }}>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'start' }}>
                    <Typography>Emergency Dental Care</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Treatment of Personal Diseases</Typography>
                    <Typography>Tooth Extraction</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Check Up</Typography>
                    <Typography>Check Up</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'start' }}>
                    <Typography>New York - 101010 Hudson <br />Yards</Typography>
                    <Box>
                        <TwitterIcon sx={{ borderRadius: '50%', backgroundColor: 'gainsboro', p: 1 }}></TwitterIcon>
                        <FacebookIcon sx={{ mx: 2, borderRadius: '50%', backgroundColor: 'gainsboro', p: 1 }}></FacebookIcon>
                        <GoogleIcon sx={{ borderRadius: '50%', backgroundColor: 'gainsboro', p: 1 }}></GoogleIcon>
                    </Box>
                    <Typography>Call Now</Typography>
                    <Typography>Emergency Dental Care</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;