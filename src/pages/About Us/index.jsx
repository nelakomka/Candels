import React from 'react';
import victoria from '../../assets/about/victoria.svg';
import candleman from '../../assets/about/candleman.svg';
import chelseaWade from '../../assets/about/chelseaWade.svg';

import './About.scss';
import {Link} from "react-router-dom";

const About = () => {

    return (
        <React.Fragment>
            <p className="breadcrumb">
                <Link to="/">Home </Link>
                > About Us </p>
            <div className="about">
                <div>
                    <h2>Our Story</h2>
                </div>
                <div>
                    <p>
                        I started Candles by Victoria in 1999 because I was disappointed with the quality of store-bought candles, as a candle lover. My goal was to create a better, more fragrant candle, and thus, Candles By Victoria was born. After more than a year experimenting and formulating, we developed the perfect wax that ensures a complete burn all the way to the bottom of the candle.
                    </p>
                    <p>
                        As a family business, we continue to grow and uphold our commitment to offering the best products possible.
                    </p>
                </div>
                <div className="pictures">
                    <img src={victoria} alt="victoria"/>
                    <img src={candleman} alt="candleman"/>
                    <img src={chelseaWade} alt="chelseaWade"/>
                </div>
                <a href="https://www.candlesbyvictoria.com/">Our old website</a>
            </div>
        </React.Fragment>
    );
}

export default About;
