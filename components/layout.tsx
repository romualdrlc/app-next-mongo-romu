import React from "react";
import Head from "next/head";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>App next de romu</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar
        collapseOnSelect
        expand="sm"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">VIDEO GAMES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/platforms">Platforms</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="#top">Top of page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-info text-black">
        <article>{children}</article>
      </div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2021 Copyright:
          <a className="text-white" href="mailto:romuald.lecorroller@gmail.com">
            romuald.lecorroller@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};
