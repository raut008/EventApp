import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import FavouriteEvents from '../FavouriteEvents/FavouriteEvents';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>Event App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link href={'/favourite'}>Favourite Events</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
