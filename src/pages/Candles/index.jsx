import React from 'react';
import { candlesData } from './candlesData';

import './candles.scss';
import {Link} from "react-router-dom";

const Candles = (props) => {
    const handleAddToCart = () => {
        props.setCartCount((prev) => prev + 1);
    };

    return (
        <React.Fragment>
            <p className="breadcrumb">
                <Link to="/">Home </Link>
                > Candles </p>
            <div className="candles">
                {candlesData.map((candles) => (
                    <div
                        className={`candle__card ${
                            candles.status === 'OUT OF STOCK' ? 'disabled' : ''
                        }`}
                    >
                        <div className="candle__card__image">
                            <img
                                src={candles.img}
                                alt="candle"
                                width={320}
                                height={350}
                            />
                            <p className="candle__status">{candles.status}</p>
                        </div>
                        <div className="candle__card__description">
                            <p>{candles.name}</p>
                            <span>{candles.price}</span>
                        </div>
                        {candles.status !== 'OUT OF STOCK' ? (
                            <button
                                className="candle__card__add-to-cart"
                                onClick={handleAddToCart}
                            >
                                ADD TO CART
                            </button>
                        ) : (
                            <button
                                className="candle__card__out-of-stock"
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

export default Candles;
