import React, {Component, Fragment  } from 'react';

import {NavItem,
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavLink,
        Container }
        from 'reactstrap';

class AppNavbar extends Component {
    state = {
            isOpen:false
        }

    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div>
            <Navbar color = 'dark' dark expand="sm" className = "mb-5">
                <Container>
                    <NavbarBrand href = "/">Hacker News</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href = "https://google.com">
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>)
    }
}

export default AppNavbar;
