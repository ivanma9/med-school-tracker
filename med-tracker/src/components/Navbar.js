import React from 'react';

import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


export default function NavBar({ logout }) {
  return (
    <div className="d-flex">
      <div className="d-flex" style={{ height: '5em' }}>
        <Navbar.Brand
          className="bg-dark"
          style={{
            paddingRight: '1em', paddingLeft: '1em', marginRight: '-0.5em', paddingTop: '0.5em',
          }}
        >
          <Link
            to="/"
            className="navbar-brand"
            style={{
              display: 'inline', alignItems: 'center', justifyContent: 'center', paddingTop: '0.4em',
            }}
          >
            <Typography
              variant="button"
              style={{
                fontSize: 30,
                paddingRight: '0.2em',
                paddingLeft: '0.5em',
                color: 'white',
              }}
            >
              Med School Tracker
            </Typography>
            <LocalHospitalIcon color="secondary"/>
          </Link>
        </Navbar.Brand>
        <Navbar expand="lg">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link to="/dashboard" as={Link}>
                <Typography
                  variant="button"
                  style={{
                    fontSize: 25,
                  }}
                >
                  Dashboard
                </Typography>
              </Nav.Link>
              <Nav.Link to="/about" as={Link}>
                <Typography
                  variant="button"
                  style={{
                    fontSize: 25,
                  }}
                >
                  About
                </Typography>
              </Nav.Link>
              <Nav.Link to="/recipes/my-recipes" as={Link}>
                <Typography
                  variant="button"
                  style={{
                    fontSize: 25,
                  }}
                >
                  My Schools
                </Typography>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div
        className="navbar-item ml-auto"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <Button className="mr-3 py-2 px-3" onClick={logout} style={{ backgroundColor: '#709255' }}>
          Logout
        </Button>
      </div>
    </div>
  );
}


