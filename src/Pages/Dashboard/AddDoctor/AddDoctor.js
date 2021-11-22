import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://sheltered-shelf-92236.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setSuccess('')
            });
    }

    return (
        <div>
            <h2>Please Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    variant="standard"
                    type="text"
                    onBlur={e => setName(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    required
                    variant="standard"
                    type="email"
                    onBlur={e => setEmail(e.target.value)}
                />
                <br />
                <br />
                <Input
                    sx={{ width: '50%' }}
                    accept="image/*"
                    // accept="image/png, image/jpg"
                    type="file"
                    onBlur={e => setImage(e.target.files[0])} />

                <br />
                <br />
                <Button
                    variant="contained"
                    type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success &&
                <Alert severity="success">{success}</Alert>
            }
        </div>
    );
};

export default AddDoctor;