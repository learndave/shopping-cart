import React from "react";

import "./NavList.css"


const NavList = () => {
    return (
        <ul className="nav-list">
                <li className="product nav-item">
                    <a href="/products">
                        Products
                    </a>
                </li>
                <li className="about nav-item">
                    <a href="/about">
                        About
                    </a>
                </li>
        </ul>
    );
}

export default NavList;