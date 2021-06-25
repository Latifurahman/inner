import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/home">INNER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/aboutUs">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/latestProjects">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/contactUs">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/manageService">ADMIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/login">LOGIN</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;