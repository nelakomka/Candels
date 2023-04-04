import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <nav>
                <div className="navLeft">
                    <ul>
                        <li>
                            <Link to="/candles">Candles</Link>
                        </li>
                        <li>
                            <Link to="/melts">Melts</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navCenter">
                    <h3>
                        <Link to="/">Victoria</Link>
                    </h3>
                </div>
                <div className="navRight">
                    <ul>
                        <li>
                            <Link to="/contact">Contacts</Link>
                        </li>
                        <li>
                            <Link to="/cart">My Cart</Link>
                            <span>{props.cartCount}</span>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
