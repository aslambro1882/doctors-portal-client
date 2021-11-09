import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TestimonialCard = ({ testi }) => {
    const { name, country, description, img } = testi;
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ mb: 4 }}>{description}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img} alt="" width="20%" />
                    <Box sx={{ ml: 4 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{name}</Typography>
                        <Typography variant="captioned">{country}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TestimonialCard;