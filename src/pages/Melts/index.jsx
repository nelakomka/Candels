import React from 'react';
import { meltsData } from './meltsData';

import './melts.scss';
import {Link} from "react-router-dom";

const Melts = (props) => {
    const handleAddToCart = () => {
        props.setCartCount((prev) => prev + 1);
    };

    return (
        <React.Fragment>
            <p className="breadcrumb">
                <Link to="/">Home </Link>
                > Melts </p>
            <div className="melts">
                {meltsData.map((melts) => (
                    <div
                        className={`melts__card ${
                            melts.status === 'OUT OF STOCK' ? 'disabled' : ''
                        }`}
                    >
                        <div className="melts__card__image">
                            <img
                                src={melts.img}
                                alt="melts"
                                width={320}
                                height={350}
                            />
                            <p className="melts__status">{melts.status}</p>
                        </div>
                        <div className="melts__card__description">
                            <p>{melts.name}</p>
                            <span>{melts.price}</span>
                        </div>
                        {melts.status !== 'OUT OF STOCK' ? (
                            <button
                                className="melts__card__add-to-cart"
                                onClick={handleAddToCart}
                            >
                                ADD TO CART
                            </button>
                        ) : (
                            <button
                                className="melts__card__out-of-stock"
                                disabled={true}
                            >
                                OUT OF STOCK
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Melts;
