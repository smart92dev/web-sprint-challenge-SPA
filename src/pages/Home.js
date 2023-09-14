import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <h1>Welcome to My Pizza Shop!</h1>
            <Link id="order-pizza" to="/form">Order Pizza</Link>
        </div>
    );
}
