import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <h2>Calender</h2>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <h2>Appointments</h2>
                <Appointments
                    date={date}
                ></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;