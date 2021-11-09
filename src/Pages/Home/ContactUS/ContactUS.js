import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';

const ContactUS = () => {
    const backgroundBG = {
        background: `url(${bg})`,
        height: '100%',
        backgroundColor: 'rgba(62,65,91,0.8)',
        backgroundBlendMode: 'darken, luminosity',
        paddingTop: '50px'

    }
    return (
        <Box style={backgroundBG}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>CONTACT US</Typography>
            <Typography variant="h3" sx={{ color: 'white' }}>Always Connect with us</Typography>
            <Box sx={{ my: 5 }}>
                <form>
                    <TextField sx={{ background: 'white', color: 'text.primary', mb: 3, width: '75%' }} id="outlined-basic" label="Email Address*" variant="outlined" />
                    <br />
                    <TextField sx={{ background: 'white', color: 'text.primary', mb: 3, width: '75%' }} id="outlined-basic" label="Subject*" variant="outlined" />
                    <br />
                    <TextareaAutosize style={{ background: 'white', color: 'text.primary', mb: 3, width: '75%', height: 200 }} id="outlined-basic" label="Outlined" variant="outlined" placeholder="Your Message*" />
                    <br />
                    <Button variant="contained" sx={{ mt: 3, mb: 12 }}>SUBMIT</Button>
                </form>
            </Box>
        </Box>
    );
};

export default ContactUS;