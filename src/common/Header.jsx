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
                    <div className="top-bar">
                        <p className="text-center">Welcome to Our Website</p>
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
                                {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="nav-item"
                                            onMouseEnter={() => setMenuOpen(index)}
                                            onMouseLeave={() => setMenuOpen(null)}
                                        >
                                            <Nav.Link href="#" className="menu-link">
                                                {item}
                                            </Nav.Link>
                                            {menuOpen === index && (
                                                <div className="submenu d-flex">

                                                    <div className="submenu-item">
                                                        <h5>The Company</h5>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>


                                                    </div>
                                                    <div className="submenu-item">
                                                        <h5>The Company</h5>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>


                                                    </div><div className="submenu-item">
                                                        <h5>The Company</h5>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>
                                                        <div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div><div className="py-1">

                                                            <a href="" className="text-dark text-decoration-none ">Option 1</a>
                                                        </div>


                                                    </div>


                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
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
