import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://damp-stream-51335.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)

                    setSuccess(true)
                }
                else {
                    setSuccess(false)
                }

            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur} />
                <br />
                <Button
                    sx={{ mt: 2, width: '25%' }}
                    variant="contained"
                    type="submit"
                >Make Admin</Button>
            </form>
            {
                success &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="success">Login successfully!</Alert>
                </Box>
            }
        </div>
    );
};

export default MakeAdmin;