import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1">Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}>
                        </TextField>
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"></TextField>
                        <br />

                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                        >Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'><Button variant="text">NEW USER? PLEASE REGISTER</Button></NavLink>
                    </form>
                    <p>-----------------------Or----------------------</p>
                    <Button
                        sx={{ width: '75%', m: 1 }}
                        variant="contained"
                        onClick={handleGoogleSignIn}>Google Sign In</Button>
                    {
                        isLoading &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        user.email &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Alert sx={{ width: '70%', m: 1 }} severity="success">Login successfully!</Alert>
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

export default Login;