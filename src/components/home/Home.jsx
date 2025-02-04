import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/home.css'; // Ensure this file exists for styling
import pixelBotLogo from '../../assets/images/PixelBot_Logo_White.svg'
import Header from '../../common/Header';




import image1 from '../../assets/images/swiggy.png';
import image2 from '../../assets/images/swiggy.png';
import image3 from '../../assets/images/swiggy.png';
import image4 from '../../assets/images/swiggy.png';
import image5 from '../../assets/images/swiggy.png';
import image6 from '../../assets/images/swiggy.png';

const images = [image1, image2, image3, image4, image5, image6];

export default function Home() {
    
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>PIXELBOT STUDIO</h1>
                            <p>Creating Amazing Digital Experiences</p>
                        </div>
                        <div className="hero-image">
                            <img src={pixelBotLogo} alt="Hero" width={100} height={100}/>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    {/* <div className="floating-cards">
                        <div className="feature-card">
                            <div className="card-body">
                                <div className="card-title fs-1">9+</div>
                                <div className="card-text">Years of Experience</div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="card-body">
                                <div className="card-title fs-1">1600+</div>
                                <div className="card-text">Projects Completed</div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="card-body">
                                <div className="card-title fs-1">600+</div>
                                <div className="card-text">Satisfied Clients</div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="card-body">
                                <div className="card-title fs-1">20+</div>
                                <div className="card-text">Countries Served</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="floating-cards">
                        {["9+", "1600+", "600+", "20+"].map((feature, index) => (
                            <div key={index} className="feature-card shadow bg-body rounded">
                                <div className="card-body">
                                    <div className="card-title fs-1">{feature}</div>
                                    <div className="card-text">Some brief description here.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Text Section */}
            <Container>
                <Row>
                    <div className='text-center py-5 top-adjst mt-5'>
                        <h1 className='text-primary fs-1'>Trusted by 600+ Startups and</h1>
                        <h1 className='fs-1 py-1'>Enterprises across 20+ Nations</h1>

                        <div className='py-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi temporibus ut, quibusdam ipsam ratione vitae commodi, consequuntur aut officia sint illum? Nostrum fugit labore consequatur officiis unde maxime accusantium.
                        </div>

                        <div>
                            <a href="#" className='text-decoration-none text-primary fs-5 py-5'>Learn more about us →</a>
                        </div>
                    </div>
                </Row>
            </Container>

            {/* show branding logos */}
            <Container>
                <Row className="image-row">
                    {images.map((image, index) => (
                        <Col key={index} className="image-item">
                            <img src={image} alt={`Image ${index + 1}`} className="flipping-image" />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* <Container>
                <Row>
                   
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Row>
            </Container> */}
            <Container>
                <Row>

                <div id="app"></div>
                </Row>
            </Container>
        </>
    );
}
