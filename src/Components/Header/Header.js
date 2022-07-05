import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "./Profile.css";
import NavList from "../NavList/NavList";
import Cart from "../Cart/Cart-Header";
import ProfilePic from "../../Assets/images/image-avatar.png";

const Header = () => {
    return (
        <nav className="header">
            <Link to="/" className="app-title header-logo">cabshoppee</Link>
            <NavList/>
            <Cart/>
            <Link to="/profile" className="header-profile">
                <img src={ProfilePic} className="profile-picture-icon"/>
            </Link>
        </nav>
    );
};

export default Header;