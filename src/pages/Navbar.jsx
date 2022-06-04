import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavBar = (props) => {
    return <nav className="nav">
        <Link to="/" className="site-title">Cameras and More</Link>
        <Badge color="red" badgeContent={props.itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ul>
            <CustomLink to="/Cameras">Cameras</CustomLink>
            <CustomLink to="/Lenses">Lenses</CustomLink>
            <CustomLink to="/Others">Others</CustomLink>
            <CustomLink to="/ShoppingCart">Shopping Cart</CustomLink>
        </ul>
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