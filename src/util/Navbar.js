import { Navbar as ReactStrapBar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import React, { useState } from 'react';
import Icon from '../res/images/'
const Navbar =  () => {

    const {collapsed, setCollapsed } = useState(true);

    const toggleCollapse = setCollapsed(!collapsed);

    return (
        <ReactStrapBar color="light" light expand="sm">
            <NarbarBrand href="/">

            </NarbarBrand>
        </ReactStrapBar>
    );
}