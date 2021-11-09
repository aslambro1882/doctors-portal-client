import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-1.png'

const Testimonial = () => {

    const testidata = [
        {
            id: 1,
            name: "Walter White",
            country: "California",
            img: people1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam rerum accusantium unde minima eaque.'
        },
        {
            id: 2,
            name: "Salina Gomez",
            country: "New York",
            img: people2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam rerum accusantium unde minima eaque.'
        },
        {
            id: 3,
            name: "Monty Carlo",
            country: "Las Vegas",
            img: people3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam rerum accusantium unde minima eaque.'
        }
    ]


    return (
        <Container sx={{ textAlign: 'left', my: 7 }}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h6">
                    TESTIMONIAL
                </Typography>
                <Typography variant="h4">
                    What's Our Patients <br /> Says
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    testidata.map(testi => <TestimonialCard
                        key={testi.id}
                        testi={testi}></TestimonialCard>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;