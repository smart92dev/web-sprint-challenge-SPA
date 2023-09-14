import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="main-body">
            <div className="pizza-body">
                <h1>Welcome to My Pizza Shop!</h1>
                <Link id="order-pizza" to="/pizza">Order Pizza</Link>
            </div>
        </div>
    );
}

export default Homepage;