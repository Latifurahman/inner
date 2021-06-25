import React from 'react';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddService from './AddService/AddService';
import './ManageService.css';
import residential from '../../../images/home.png';
import restaurant from '../../../images/restaurant.png';
import corporate from '../../../images/corporate.png';
import commercial from '../../../images/commercial.png';
import industry from '../../../images/indutrial.png';


const serviceData = [
    {
        name: 'Residential Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: residential,
        rangeStart: 3000
    },
    {
        name: 'Restaurant Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: restaurant,
        rangeStart: 2000
    },
    {
        name: 'Corporate Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: corporate,
        rangeStart: 3500
    },
    {
        name: 'Commercial Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: commercial,
        rangeStart: 4000
    },
    {
        name: 'Industrial Design',
        description: 'We bring the right people together to challenge established thinking and drive transform in 2020',
        img: industry,
        rangeStart: 5000
    },

]

const ManageService = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <nav className="nav">
                            <ul className="navbar-nav">
                                <li className="nav-item first-item only"><Link to="/orderList"><ListIcon></ListIcon> Order list</Link></li>
                                <li className="nav-item"><Link to="/addService"><AddIcon></AddIcon> Add service</Link></li>
                                <li className="nav-item"><Link to="/manage"><PersonAddIcon></PersonAddIcon> Make Admin</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route path="/addService">
                                <AddService></AddService>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default ManageService;