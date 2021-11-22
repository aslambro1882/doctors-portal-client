import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1">Register</Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}>
                            </TextField>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}>
                            </TextField>
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"></TextField>
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                                label="Re-Write Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"></TextField>
                            <br />

                            <Button
                                variant="contained"
                                sx={{ width: '75%', m: 1 }}
                                type="submit"
                            >REGISTER</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'><Button variant="text">ALREADY REGISTERED? PLEASE LOGIN</Button></NavLink>
                        </form>
                    }
                    {
                        isLoading &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        user.email &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Alert sx={{ width: '70%', m: 1 }} severity="success">User Created successfully!</Alert>
                        </Box>
                    }
                    {
                        authError &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Alert sx={{ width: '70%', m: 1 }} severity="error">{authError}</Alert>
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;