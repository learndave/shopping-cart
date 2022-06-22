import React from "react";

import "./Header.css";
import "./Profile.css";
import NavList from "../NavList/NavList";
import Cart from "../Cart/Cart";
import ProfilePic from "../../Assets/images/image-avatar.png";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="app-title header-logo">
                cabshoppee
            </a>
            <NavList/>
            <Cart/>
            <a href="/cart" className="header-profile">
                <img src={ProfilePic} className="profile-picture-icon"/>
            </a>
        </div>
    );
};

export default Header;