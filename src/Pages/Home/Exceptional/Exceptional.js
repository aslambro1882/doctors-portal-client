import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Exceptional = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img src={treatment} alt="" width="100%" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ mt: 4, fontWeight: 500, color: 'text.secondary' }}>Exceptional Dental <br /> Care, on Your Terms</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', my: 6 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout . The Point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Exceptional;