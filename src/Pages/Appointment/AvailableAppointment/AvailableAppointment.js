import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        price: 15,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        price: 17,
        space: 5
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        price: 23,
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 AM - 8:30 AM',
        price: 19,
        space: 6
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        price: 25,
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Cleaning',
        time: '7:30 AM - 9:20 PM',
        price: 28,
        space: 10
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);


    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'rgb(24,210,187)', mb: 3 }}>Available Appointment on {date.toDateString()}</Typography>
            {
                bookingSuccess &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '30%', m: 1 }} severity="success">Appointment Booked successfully!</Alert>
                </Box>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }


            </Grid>
        </Container>
    );
};

export default AvailableAppointment;