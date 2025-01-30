import React from 'react';
import { Container, Row } from 'reactstrap';
import '../../assets/css/home.css'; // Ensure this file exists for styling
import pixelBotLogo from '../../assets/images/PixelBot_Logo_White.svg'

export default function Home() {
    return (
        <>
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
                    <div className="floating-cards">
                        {["9+", "1600+", "600+", "20+"].map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="card-body">
                                    <div className="card-title fs-1">{feature}</div>
                                    <div className="card-text">Some brief description here.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Additional Text Section */}
            <Container>
                <Row>
                    <div className='text-center py-5'>
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
        </>
    );
}
