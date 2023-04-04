import React from 'react';

import candle from '../../assets/about/contactusCandle.svg';

import './Contact.scss';
import {Link} from "react-router-dom";

const Contact = () => {

    return (
        <React.Fragment>
            <p className="breadcrumb">
                <Link to="/">Home </Link>
                > Candles </p>
            <div className="contact">
                <img src={candle} alt="candle"/>
                <div className="contact__info">
                    <h1>CONTACT US</h1>
                    <p className="contact__info-title">Have any questions? We’d love to hear from you.</p>
                    <div className="contact__info-form">
                        <div className="form">
                            <input className="Full Name" placeholder="Full Name"/>
                            <input className="Email" placeholder="Email"/>
                            <textarea rows={4} className="Message" placeholder="Message"/>
                            <button>Contact Us</button>
                        </div>
                        <div className="information__details">
                            <h2>Contact</h2>
                            <p>victoria@candlesbyvictoria.com</p>
                            <p>903-944-5042</p>
                            <h2>Based in</h2>
                            <p>296 W. Kansas St.</p>
                            <p>Van, TX. USA 75790</p>
                            <p>Please call or text us for faster responses.</p>
                            <p>Please include order number if you are inquiring</p>
                            <p>about an existing order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
