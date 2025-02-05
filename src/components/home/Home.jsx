import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row, Card, CardBody, CardImg, CardTitle, CardText, Image } from 'react-bootstrap';
import '../../assets/css/home.css'; // Ensure this file exists for styling
import pixelBotLogo from '../../assets/images/PixelBot_Logo_White.svg'
import Header from '../../common/Header';
// import Card from 'react-bootstrap/Card';

import image1 from '../../assets/images/swiggy.png';
import image2 from '../../assets/images/swiggy.png';
import image3 from '../../assets/images/swiggy.png';
import image4 from '../../assets/images/swiggy.png';
import image5 from '../../assets/images/swiggy.png';
import image6 from '../../assets/images/swiggy.png';
import OurServices from '../OurServices';

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
                            <img src={pixelBotLogo} alt="Hero" width={100} height={100} />
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
                <Row className=''>
                    <div className="image-row my-5">
                        {images.map((image, index) => (
                            <Col key={index} className="image-item">
                                <img src={image} alt={`Image ${index + 1}`} className="w-100" />
                            </Col>
                        ))}

                    </div>

                </Row>
            </Container>

            <div className="container-fluid bg-light my-5">
                <Container>
                    <div className='text-center text-primary fs-1 fw-bold'>what can we do</div>

                    <div className='py-3 text-center lh-base '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam tenetur amet beatae minus et temporibus alias iste laboriosam ratione saepe eveniet commodi deserunt, distinctio qui natus sit atque sequi?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi necessitatibus facilis sed obcaecati inventore sint, expedita nemo, hic a est eius corrupti sit velit in tempora fugit asperiores esse fuga.
                    </div>

                    {/* Software Development Row (Sticky Row) */}
                    <Row className="border border-2 p-3 bg-white sticky-row">
                        <h1 className=' py-2 '>software development</h1>
                        <div className='d-flex justify-content-between  py-5'>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 1.1</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 1.2</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 1.3</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 1.4</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                    {/* Application Development Row (Overlapping Effect) */}
                    <Row className="p-3 bg-white overlapping-row shadow bg-body rounded">
                        <h1 className=' py-2 '>Application development</h1>
                        <div className='d-flex justify-content-between  py-5'>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 2.1</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 2.2</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 2.3</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 2.4</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                    {/* Digital Marketing Row (Overlapping Effect) */}
                    <Row className="p-3 bg-white overlapping-row shadow bg-body rounded">
                        <h1 className=' py-2 '>Digital Marketing</h1>
                        <div className='d-flex justify-content-between  py-5'>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.1</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.2</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.3</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.4</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                    {/* Digital Marketing Row (Overlapping Effect) */}
                    <Row className="p-3 bg-white overlapping-last-row shadow bg-body rounded">
                        <h1 className='py-2'>Testing Mode</h1>
                        <div className='d-flex justify-content-between py-5'>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.1</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.2</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.3</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <CardImg variant="top" src={image1} className='w-100' />
                                <CardBody>
                                    <CardTitle>Card Title 3.4</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                </Container>
            </div>

            <Container>
                <div className='text-center text-primary fs-1 fw-bold text-capitalize'>why choose us ?</div>
                <Row className='my-5'>
                    <div className="col-md-6 border-5 border-end border-primary pe-5 ">
                        <h1>No need to wonder</h1>
                        <h1 className='text-primary py-2'>Working with us in wonderful.</h1>

                        <div>
                            <p className='py-3 text-dark lh-base'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aliquam deserunt fugiat enim doloremque impedit repellat dicta porro maxime, laborum voluptates repudiandae modi odio nisi tempore? Ipsam quibusdam eius quis.repudiandae modi odio nisi tempore? Ipsam quibusdam eius quis
                            </p>

                            <h5>
                                Before you start, now you can e-sign A digital NDA with us.
                            </h5>

                            <button className="btn btn-primary btn-lg fw-bold my-5"> Sign NDA </button>
                        </div>

                    </div>
                    <div className="col-md-6 ps-5">
                        <div>
                            <h3 className='text-capitalize mrgin-mob'>Due diligence with quality & security standards</h3>

                            <div className='d-flex gap-5 py-4 featured-brand-logo r'>
                                <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
                                <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
                                <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
                                <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
                                <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
                            </div>
                        </div>

                        <div>
                            <h3 className='text-capitalize my-5'>we are featured in</h3>

                            <Row className='featured-logo'>
                                <div className="image-row-featured mt-2">
                                    {images.map((image, index) => (
                                        <Col key={index} className="image-item-featured">
                                            <Image src={image1} className='img-fluid' width={100} height={100} alt={`Image ${index + 1}`} />

                                        </Col>
                                    ))}

                                </div>

                            </Row>

                        </div>

                    </div>

                </Row>
            </Container>

            {/* our services section */}
            <OurServices/>
        </>
    );
}
