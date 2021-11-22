import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Alert, Button, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth'

const CheckoutForm = ({ appointment }) => {
    const { price, patientName, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('');

    console.log('hello1')
    useEffect(() => {
        fetch('https://sheltered-shelf-92236.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            });

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('')
            setProcessing(false)
        } else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('');
            setProcessing(false)
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully')
            console.log(paymentIntent)
            setProcessing(false)

            // save to database
            const payment = {
                payment: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4
            }
            const url = `https://sheltered-shelf-92236.herokuapp.com/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'app.ication/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    };
    return (
        <div>
            <h2>Card</h2>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ?
                    <CircularProgress />
                    :
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!stripe || success}
                    >Pay ${price}</Button>}
            </form>
            {
                error &&
                <Alert severity="error">{error}</Alert>
            }
            {
                success &&
                <Alert severity="success">{success}</Alert>
            }
        </div>
    );
};

export default CheckoutForm;

/*
1. install stripe and stripe-react
2. Set publishable key
3. Elements
4. Checkout Form
----
5. Create payment method
6. server create payment intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error

*/