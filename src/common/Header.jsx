import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoDark from "../assets/images/PixelBot_Logo_Dark.svg";
import logoLight from "../assets/images/PixelBot_Logo_White.svg";

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 70);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Sticky Header with Top Bar & Navbar */}
            <div className={`sticky-header ${scrolling ? "scrolled" : ""}`}>
                {/* Top Bar */}
                {!scrolling && (
                    <div className="top-bar d-flex justify-content-center">
                        <div>
                            📩 &nbsp;
                            <a href="mailto:info@pixelbotstudio.com" className="text-decoration-none text-white">info@pixelbotstudio.com  &nbsp;| </a>
                        </div>
                        <div>
                            <a href="tel:+91-8446297665" className="text-decoration-none text-white"> &nbsp;+91-8446297665</a>
                        </div>
                    </div>
                )}

                {/* Navbar */}
                <Navbar expand="lg" className={`main-navbar ${scrolling ? "sticky-top" : ""}`}>
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={scrolling ? logoDark : logoLight}
                                alt="Logo"
                                className="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle onClick={() => setMobileMenu(!mobileMenu)} />
                        <Navbar.Collapse className={mobileMenu ? "show" : ""}>
                            <Nav className="mx-auto">
                                {/* Static Nav Items */}
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(0)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Company &darr;
                                    </Nav.Link>
                                    {menuOpen === 0 && (
                                        <div className="submenu d-flex flex-column">
                                        <h4 className="text-danger mb-4">The Company</h4>
                                        {/* Header Row */}
                                    
                                        {/* First Column Section */}
                                        <div className="submenu-row d-flex flex-column mb-4">
                                            <a href="" className="text-dark text-decoration-none py-2">About Us</a>
                                            <a href="" className="text-dark text-decoration-none py-2">Clients</a>
                                            <a href="" className="text-dark text-decoration-none py-2">Careers</a>
                                        </div>
                                    
                                        {/* Second Column Section */}
                                        <div className="submenu-column d-flex flex-column ">
                                            <a href="" className="text-dark text-decoration-none mb-3">Imagination Meets, Implementation</a>
                                            <div className="d-flex justify-content-between">
                                                <div className="stats-item text-center">
                                                    <h2>9+</h2>
                                                    <p>Years in Business</p>
                                                </div>
                                                <div className="stats-item text-center">
                                                    <h2>100+</h2>
                                                    <p>Dummy Text</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div className="stats-item text-center">
                                                    <h2>9+</h2>
                                                    <p>Years in Business</p>
                                                </div>
                                                <div className="stats-item text-center">
                                                    <h2>100+</h2>
                                                    <p>Dummy Text</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(1)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        About
                                    </Nav.Link>
                                    {menuOpen === 1 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 2</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(2)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Services
                                    </Nav.Link>
                                    {menuOpen === 2 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 2</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(3)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Portfolio
                                    </Nav.Link>
                                    {menuOpen === 3 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(4)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Blog
                                    </Nav.Link>
                                    {menuOpen === 4 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(5)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Contact
                                    </Nav.Link>
                                    {menuOpen === 5 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Nav>
                            <Button variant="danger" className="contact-btn">
                                Get in Touch
                            </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
