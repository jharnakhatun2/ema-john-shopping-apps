import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div >
            <header className="bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center py-3 bg-dark">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src={logo} alt=""/>
                        </a>

                        <ul className="nav align-items-center header-menu ">
                            <li className="nav-item px-4">Order</li>
                            <li className="nav-item px-4">Order Review</li>
                            <li className="nav-item px-4">Manage Inventory</li>
                            <li className="nav-item ">Login</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;