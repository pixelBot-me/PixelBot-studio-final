import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";
import '../assets/css/header.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
            {/* Top Bar */}
            <div className={`top-bar ${scrolling ? "scrolled" : ""}`}>
                <p className="text-center">Welcome to Our Website</p>
            </div>

            {/* Navbar */}
            <Navbar expand="lg" className={`main-navbar sticky-top ${scrolling ? "scrolled" : ""}`}>
                <Container>
                    <Navbar.Brand>
                        <img
                            src={scrolling ? "/logo-dark.png" : "/logo-light.png"}
                            alt="Logo"
                            className="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setMobileMenu(!mobileMenu)} />
                    <Navbar.Collapse className={mobileMenu ? "show" : ""}>
                        <Nav className="mx-auto">
                            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item, index) => (
                                <div
                                    key={index}
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(index)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#">{item}</Nav.Link>
                                    {menuOpen === index && (
                                        <div className="submenu">
                                            <div className="submenu-item">Option 1</div>
                                            <div className="submenu-item">Option 2</div>
                                            <div className="submenu-item">Option 3</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Nav>
                        <Button variant="outline-danger" className="contact-btn">
                            Get in Touch
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Welcome to Our Website</h1>
                            <p>Creating Amazing Digital Experiences</p>
                        </div>
                        <div className="hero-image">
                            <img src="/hero-image.png" alt="Hero" />
                        </div>
                    </div>

                    {/* Four Floating Cards */}
                    <div className="floating-cards">
                        {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((feature, index) => (
                            <Card key={index} className="feature-card">
                                <Card.Body>
                                    <Card.Title>{feature}</Card.Title>
                                    <Card.Text>Some brief description here.</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
