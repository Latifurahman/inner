import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/home">INNER</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/latestProjects">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="#">ADMIN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/login">LOGIN</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;