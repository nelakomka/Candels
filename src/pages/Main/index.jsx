import React from 'react';

import background from '../../assets/img/background.jpg';

import './main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="content">
            <img
                className="backgroundImage"
                src={background}
                alt="background"
            />
            <button>
                <Link to="/candles">SHOP NOW</Link>
            </button>
        </div>
    );
};

export default Main;
