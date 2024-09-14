import React from 'react';
import './card.css'; // Import the CSS file

export default function Card() {
    return (
        <div className="card">
            <a href="/">
                <img className="card-image" src="./public/vite.svg" alt="product_image1" />
            </a>
            <div className="card-content">
                    <h5 className="card-title">
                       Vite x React
                    </h5>

            </div>
        </div>
    );
}
