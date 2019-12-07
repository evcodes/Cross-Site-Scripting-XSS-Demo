import React, {Component } from 'react';
import {NavItem,
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        Container }
        from 'reactstrap';
        
import {  NavLink } from 'react-router-dom';

export default class AppNavbar extends Component {
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
                        <NavbarBrand>
                            <NavLink to = "/">
                                Hacker News
                            </NavLink>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen = {this.state.isOpen} navbar>
                            <Nav className = "ml-auto" navbar>
                                <NavItem>
                                    <NavLink to = "/about" >
                                        About
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div> 
        )
    }
}
