import React, { useContext, useState, useEffect } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';
import Book from './Book/Book';
import { useParams } from 'react-router';


const ServiceList = () => {
    const {serviceId} = useParams();
    const [serviceData, setServiceData] = useState({});
    useEffect(() =>{
        fetch('http://localhost:5000/service/' + serviceId)
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[serviceId])
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <nav className="nav">
                            <ul className="navbar-nav">
                                <li className="nav-item first-item"><Link to="/book"><ShoppingCartIcon></ShoppingCartIcon> Book</Link></li>
                                <li className="nav-item"><Link to="/bookingList"><ImportContactsIcon></ImportContactsIcon> Booking List</Link></li>
                                <li className="nav-item"><Link to="/review"><RateReviewIcon></RateReviewIcon> Review</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route path="/book">
                                 <Book serviceData={serviceData}></Book>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/bookingList">
                                <BookingList></BookingList>
                            </Route>
                        </Switch>
                        <Switch>
                            <Route path="/review">
                                <Review></Review>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default ServiceList;