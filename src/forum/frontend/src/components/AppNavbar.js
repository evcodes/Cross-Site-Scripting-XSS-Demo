import React, {Component } from 'react';
import {NavItem,
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavLink,
        Container }
        from 'reactstrap';
import {
    BrowserRouter as Router,
    Route, 
    Switch, 
    Link } from 'react-router-dom';

import About from './About'
import Topic from './Topic';
import TopicContainer from './TopicContainer';

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
            <Router>
                <div>
                    <Navbar color = 'dark' dark expand="sm" className = "mb-5">
                        <Container>
                            <NavbarBrand>
                                <Link className = "nav-text-style"to = "/">
                                    Hacker News
                                </Link>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle}/>
                            <Collapse isOpen = {this.state.isOpen} navbar>
                                <Nav className = "ml-auto" navbar>
                                    <NavItem>
                                        <NavLink >
                                            <Link className = "nav-text-style" to="/about">     
                                                About
                                            </Link>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                <Switch>
                    <Route path = "/about">
                        <About/>
                    </Route>
                    <Route path = "/">
                        <TopicContainer/>
                    </Route>
                </Switch>
            </div>
        </Router>    
        )
    }
}
