import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavBar = (props) => {
    return <nav className="nav">
        <div className="innerNav">
            <Link to="/" className="site-title">Cameras&More</Link>
            <ul>
                <CustomLink to="/Cameras">Cameras</CustomLink>
                <CustomLink to="/Lenses">Lenses</CustomLink>
                <CustomLink to="/ShoppingCart"><Badge color="secondary" badgeContent={props.itemCount}>
            <ShoppingCartIcon />{" "}
            </Badge></CustomLink>
            </ul> 
        </div> 
    </nav>
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path : resolvedPath.pathname, end : true});
    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default NavBar;