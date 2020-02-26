import { Navbar as ReactStrapBar, NavLink, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../res/images/QUANTT_logo.png';
import '../res/styles/nav.css';
const Navbar =  () => {

    const [ isOpen, setOpen ] = useState(true);

    const toggleOpen = () => setOpen(!isOpen);

    return (
        <ReactStrapBar className="flex-fill" color="light" light expand="sm">
            <NavbarBrand href="/">
                <img src={Logo} alt="Quantt" className="logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggleOpen}/>
            <Collapse className="justify-content-end" isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/resources">Resources</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </ReactStrapBar>
    );
}

export default Navbar;