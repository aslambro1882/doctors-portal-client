import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'


const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(62,65,91,0.5)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box sx={{ lineHeight: 5 }}>
                        <Typography variant="h6" sx={{ color: 'rgb(24,210,187)', mb: 3 }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 3, color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non natus illum hic minus atque ad quas molestiae voluptate recusandae quidem.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: 'rgb(24,210,187)' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;