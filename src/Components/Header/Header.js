import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "./Profile.css";
import NavList from "../NavList/NavList";
import Cart from "../Cart/Cart";
import ProfilePic from "../../Assets/images/image-avatar.png";

const Header = () => {
    return (
        <nav className="header">
            <Link to="/" className="app-title header-logo">cabshoppee</Link>
            <NavList/>
            <Cart/>
            <a href="/cart" className="header-profile">
                <img src={ProfilePic} className="profile-picture-icon"/>
            </a>
        </nav>
    );
};

export default Header;