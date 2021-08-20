import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Mapify
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/feedback" activeStyle>
                        Feedback
                    </NavLink>
                    <NavLink to="/signin" activeStyle>
                        Sign In
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">
                            Sign Up
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;