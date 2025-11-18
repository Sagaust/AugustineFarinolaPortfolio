// src/components/NavBar.js
'use client';

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './NavBar.module.css'; // We'll create this

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>Augustine Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <Nav.Link>Research &amp; Projects</Nav.Link>
            </Link>
            <Link href="/skills" passHref legacyBehavior>
              <Nav.Link>Skills</Nav.Link>
            </Link>
            <Link href="/articles" passHref legacyBehavior>
              <Nav.Link>Publications</Nav.Link>
            </Link>
            <Link href="/testimonials" passHref legacyBehavior>
              <Nav.Link>Testimonials</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;