import React from "react";
import { Link } from "react-router-dom";

import "./NavList.css"

const NavList = () => {
    return (
        <ul className="nav-list">
                <li>
                    <Link to="/products" className="product nav-item">Products</Link>
                </li>
                <li>
                    <Link to="/about" className="about nav-item">About</Link>
                </li>
        </ul>
    );
}

export default NavList;