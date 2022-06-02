import React from "react";

const NavBar = () => {
    return <nav className="nav">
        <a href="/" className="site-title">Cameras and More</a>
        <ul>
            <li className="active">
                <a href="/Cameras" className="active">Cameras</a>
            </li>
            <li> 
                <a href="/Lenses">Lenses</a>
            </li>
            <li>
                <a href="/Other">Other</a>
            </li>
        </ul>
    </nav>
}

export default NavBar;