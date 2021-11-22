import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-shelf-92236.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1>Doctors: {doctors?.length}</h1>
            <Container>
                <Grid container spacing={2} >
                    {
                        doctors.map(doctor => <Grid key={doctor._id} item xs={12} sm={6} md={4}>
                            <img src={`data:image/png;base64,${doctor.image}`} alt="" width="100%" height="250px" />
                            <Typography>{doctor.name}</Typography>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;