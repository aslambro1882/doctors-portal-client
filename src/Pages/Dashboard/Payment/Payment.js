import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JxZ7BHBi2EebUzAPj7RLZrJ1qKEXiIYw2SGO2vobuA48bVkwIoHksSaen8Y8J1aI13duvJD2gUWZDLyRI2qIllq00q0xvbKj8');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`https://sheltered-shelf-92236.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data);
            })
    }, [appointmentId])
    return (
        <div>
            <h1>Payment for {appointment.serviceName}</h1>
            <h3>You need to pay ${appointment.price}</h3>
            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;