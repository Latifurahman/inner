import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import './Book.css';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Book = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, price} = props.serviceData;
    return (
        <div className="book-container">
            <div className="text-container">
                <h5 className="text-decoration first-line">{loggedInUser.name}</h5>
            </div>
            <div className="text-container">
                <h5 className="text-decoration">{loggedInUser.email}</h5>
            </div>
            <div className="text-container">
                <h5 className="text-decoration">{name}</h5>
            </div>
            <div className="text-container col-md-5 offset-md-1">
                <ProcessPayment></ProcessPayment>
            </div>
            <div className="text-container">
                <h4 className="fw-bold">Your service charged will be ${price}</h4>
            </div>
        </div>
    );
};

export default Book;