import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51J0SIPCbp0dvZrDtZOOmyA5z3dZxX00p38q9EjzVYzfOQOwcqFxYAIEfsZaVtQqzBCtq3QnHvm13Q9tNUzL8nOKg00BbspzoWz');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;