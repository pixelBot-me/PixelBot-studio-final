import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoDark from "../assets/images/PixelBot_Logo_Dark.svg";
import logoLight from "../assets/images/PixelBot_Logo_White.svg";
import { Accordion, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 70);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        { id: 1, name: "Software Development", details: "1 Detailed content for Software Development." },
        { id: 2, name: "Digital Marketing", details: "2 Detailed content for Digital Marketing." },
        { id: 3, name: "UI/UX Design", details: "3 Detailed content for UI/UX Design." },
        { id: 4, name: "Cloud Services", details: "4 Detailed content for Cloud Services." },
        { id: 5, name: "Data Analytics", details: "5 Detailed content for Data Analytics." },
    ];
    useEffect(() => {
        setSelectedService(services[1]); // Set the first service by default
    }, []);


    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

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
                            <Nav className="mx-auto nav-item">
                                <div
                                    className=""
                                    onMouseEnter={() => setMenuOpen(0)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Company &darr;
                                    </Nav.Link>
                                    {menuOpen === 0 && (
                                        <div className="submenu d-flex flex-row shadow bg-body rounded rounded-4">
                                            <div className="submenu-row d-flex flex-column my-4">
                                                <h6 className="text-danger mb-4">The Company</h6>
                                                <a href="/about-us" className="text-dark text-decoration-none py-2">About Us</a>
                                                <a href="" className="text-dark text-decoration-none py-2">Clients</a>
                                                <a href="" className="text-dark text-decoration-none py-2">Careers</a>
                                            </div>

                                            <div className="submenu-column d-flex flex-column ">
                                                <a href="" className="text-dark text-decoration-none my-4 text-break">Imagination Meets, Implementation</a>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-dark">
                                                        <h2>9+</h2>
                                                        <p>Years in Business</p>
                                                    </div>
                                                    <div className="text-dark">

                                                        <h2>100+</h2>
                                                        <p>Dummy Text</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="text-dark">
                                                        <h2>9+</h2>
                                                        <p>Years in Business</p>
                                                    </div>
                                                    <div className="text-dark">
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
                                        Services &darr;
                                    </Nav.Link>
                                    {menuOpen === 1 && (
                                        <div className="submenu shadow bg-body rounded rounded-4">
                                            <div className="submenu-column text-dark border-end border-1 border-secondary">
                                                <h3 className="text-primary">Our Services</h3>
                                                {services.map((service) => (
                                                    <div key={service.id} onClick={() => handleServiceClick(service)} className="submenu-item">
                                                        <a
                                                            href="#"
                                                            className={`text-decoration-none ${selectedService && selectedService.id === service.id ? 'text-danger' : 'text-dark'}`}
                                                        >
                                                            {service.name}
                                                            {/* {console.log(selectedService.id + "and" + service.id)} */}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="submenu-column px-5">
                                                {selectedService && (
                                                    <>
                                                        <div>
                                                            <h5>{selectedService.name}</h5>
                                                            <p>{selectedService.details}</p>

                                                        </div>
                                                        <hr />
                                                        <div className="d-flex">
                                                            <div className="stats-item">

                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 1</a>
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 2</a>
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 3</a>
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 4</a>
                                                                </div>                                                                                                                </div>
                                                            <div className="stats-item">

                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 1</a>
                                                                </div>                                                             <div>
                                                                    <a href="#" className="text-decoration-none">Link 2</a>
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 3</a>
                                                                </div>
                                                                <div>
                                                                    <a href="#" className="text-decoration-none">Link 4</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
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
                                    {/* {menuOpen === 3 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(4)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Blog
                                    </Nav.Link>
                                    {/* {menuOpen === 4 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                                <div
                                    className="nav-item"
                                    onMouseEnter={() => setMenuOpen(5)}
                                    onMouseLeave={() => setMenuOpen(null)}
                                >
                                    <Nav.Link href="#" className="menu-link">
                                        Contact
                                    </Nav.Link>
                                    {/* {menuOpen === 5 && (
                                        <div className="submenu d-flex">
                                            <div className="submenu-item">
                                                <a href="" className="text-dark text-decoration-none">Option 1</a>
                                            </div>
                                        </div>
                                    )} */}
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
