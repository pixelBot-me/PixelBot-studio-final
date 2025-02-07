import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row, Card, CardBody, CardImg, CardTitle, CardText, Image, CardSubtitle } from 'react-bootstrap';
import '../../assets/css/home.css';
import pixelBotLogo from '../../assets/images/PixelBot_Logo_White.svg'
import Header from '../../common/Header';
// import Card from 'react-bootstrap/Card';

import image1 from '../../assets/images/softwareDev.jpg';
import image2 from '../../assets/images/softwareDev.jpg';
import image3 from '../../assets/images/softwareDev.jpg';
import image4 from '../../assets/images/softwareDev.jpg';
import image5 from '../../assets/images/softwareDev.jpg';
import image6 from '../../assets/images/softwareDev.jpg';

import image7 from '../../assets/images/python.jpg';
import image8 from '../../assets/images/python.jpg';
import image9 from '../../assets/images/python.jpg';
import image10 from '../../assets/images/python.jpg';
import image11 from '../../assets/images/python.jpg';
import image12 from '../../assets/images/python.jpg';

import OurServices from '../OurServices';
import '../../assets/css/common.css';
import GetInTouch from '../GetInTouch';
import { useLocation } from 'react-router-dom';

const images = [image1, image2, image3, image4, image5, image6];

const techno = [image7, image8, image9, image10, image11, image12];


export default function Home() {

    useEffect(() => {
        const rows = document.querySelectorAll(".sticky-row");
        const rowOffsets = [];

        rows.forEach((row, index) => {
            rowOffsets.push(row.offsetTop);
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            rows.forEach((row, index) => {
                if (scrollY >= rowOffsets[index] && scrollY < rowOffsets[index] + row.offsetHeight) {
                    row.classList.add("sticky-active");
                } else {
                    row.classList.remove("sticky-active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header isHomePage={true} />
            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 style={{
                                background: 'linear-gradient(45deg, #20274c, #7ebcebf0)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }} >PIXELBOT STUDIO</h1>
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
                        {[{ feature: "9+", text: "Years In business" },
                        { feature: "1600+", text: "Projects Delivered" },
                        { feature: "600+", text: "Clients Relationships" },
                        { feature: "20+", text: "Countries Served" }].map((item, index) => (
                            <div key={index} className="feature-card shadow bg-body rounded">
                                <div className="card-body">
                                    <div className="card-title fs-1 fw-bolder">{item.feature}</div>
                                    <div className="card-text">{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Text Section */}
            <Container>
                <Row className='my-5'>
                    <div className='text-center py-5 top-adjst mt-5 '>
                        <h1 className='thm-clr fs-1'>Trusted by 600+ Startups and</h1>
                        <h1 className='fs-1 py-1' style={{
                            background: 'linear-gradient(45deg, #20274c, #7ebcebf0)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>Enterprises across 20+ Nations</h1>

                        <p className='py-5 fst-normal lh-base'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi temporibus ut, quibusdam ipsam ratione vitae commodi, consequuntur aut officia sint illum? Nostrum fugit labore consequatur officiis unde maxime accusantium.
                        </p>

                        <div>
                            <a href="/about-us" className='text-decoration-none thm-clr fs-5 py-5'>Learn more about us →</a>
                        </div>
                    </div>
                </Row>
            </Container>

            {/* show branding logos */}
            <Container>
                <Row className='overflow-hidn'>
                    <div className="image-row my-5">
                        {techno.map((image, index) => (
                            <Col key={index} className="image-item">
                                <img src={image} alt={`Image ${index + 1}`} className="w-75 shadow mb-5 bg-body rounded" />
                            </Col>
                        ))}

                    </div>

                </Row>
            </Container>

            <div className="container-fluid bg-light my-5">
                <Container>
                    <div className='text-center thm-clr fs-1 fw-bold'>What Can We Do</div>

                    <div className='py-3 text-center lh-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam tenetur amet beatae minus et temporibus alias iste laboriosam ratione saepe eveniet commodi deserunt, distinctio qui natus sit atque sequi?
                    </div>

                    {/* Software Development Row (Sticky Row) */}
                    <Row className="border border-2 p-3 bg-white sticky-row">
                        <h1 className='py-2'>Software Development</h1>
                        <div className='d-flex justify-content-between py-5'>
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
                    <Row className="p-3 bg-white sticky-row shadow bg-body rounded">
                        <h1 className='py-2'>Application Development</h1>
                        <div className='d-flex justify-content-between py-5'>
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

                    {/* Digital Marketing Row (Overlapping Effect) */}
                    <Row className="p-3 bg-white sticky-row shadow bg-body rounded">
                        <h1 className='py-2'>Digital Marketing</h1>
                        <div className='d-flex justify-content-between py-5'>
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

                    {/* Testing Mode Row (Sticky and Overlapping) */}
                    <Row className="p-3 bg-white  sticky-row shadow bg-body rounded">
                        <h1 className='py-2'>Testing Mode</h1>
                        <div className='d-flex justify-content-between py-5'>
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

                </Container>
            </div>

            <Container className='overflow-hidden'>
                <div className='text-center thm-clr fs-1 fw-bold text-capitalize'>why choose us ?</div>
                <Row className='my-5'>
                    <div className="col-md-6 border-5 border-end border-primary pe-5 ">
                        <h1>No need to wonder</h1>
                        <h1 className='thm-clr py-2'>Working with us in wonderful.</h1>

                        <div>
                            <p className='py-3 text-dark lh-base'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aliquam deserunt fugiat enim doloremque impedit repellat dicta porro maxime, laborum voluptates repudiandae modi odio nisi tempore? Ipsam quibusdam eius quis.repudiandae modi odio nisi tempore? Ipsam quibusdam eius quis
                            </p>

                            <h5>
                                Before you start, now you can e-sign A digital NDA with us.
                            </h5>

                            <button className="btn bg-theme text-white btn-lg fw-bold my-5"> Sign NDA &nbsp; →</button>
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

            {/* starts multi layer carousel section */}
            {/* <Container>
                <div className="container fluid multi-layer-image-row1 mt-5">
                    {techno.map((image, index) => (
                        <Col key={index} className="multi-layer-image-item1">
                            <img src={image} alt={`Image ${index + 1}`} className="w-50 shadow mb-5 bg-body rounded" />
                        </Col>
                    ))}
                </div>
            </Container>

            <Container>
                <div className="container fluid multi-layer-image-row2">
                    {techno.map((image, index) => (
                        <Col key={index} className="multi-layer-image-item2">
                            <img src={image} alt={`Image ${index + 1}`} className="w-50 shadow mb-5 bg-body rounded" />
                        </Col>
                    ))}
                </div>
            </Container> */}

            <Container>
                <div className="container fluid multi-layer-image-row1 mb-4">
                    {techno.map((image, index) => (
                        <Col key={index} className="multi-layer-image-item1">
                            <img src={image} alt={`Image ${index + 1}`} className="w-50 shadow mb-5 bg-body rounded" />
                        </Col>
                    ))}
                </div>
            </Container>

            {/* starts our services section */}
            <OurServices />
            {/* end our services section */}

            {/* diagonal multicolor background section */}
            <Container>
                <Row className='diagonal-bg py-5 my-5'>
                    <div className='col-md-6'>
                        <h1 className='text-capitalize pt-5'>what our amazing client</h1>
                        <h1 className='text-capitalize text-primary'>say about us</h1>

                        <p className='py-4 fw-normal'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque numquam quisquam obcaecati suscipit illo, beatae at, labore veniam nostrum ducimus eos reprehenderit architecto in iure nisi. Vitae voluptas ab beatae.
                        </p>


                    </div>
                    <div className='col-md-6 d-flex gap-5'>
                        <Card style={{ height: '15rem' }} className='p-3'>
                            <CardBody>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </CardText>
                                <CardSubtitle><a href="" className='text-danger'>Read more</a></CardSubtitle>
                                <div className='pt-5'>
                                    <CardTitle>Teaching Coordinator</CardTitle>
                                    <CardText>
                                        Lorem ipsum dolor sit .
                                    </CardText>
                                </div>
                            </CardBody>

                        </Card>

                        <Card style={{ height: '15rem' }} className='p-3'>
                            <CardBody>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </CardText>
                                <CardSubtitle><a href="" className='text-danger'>Read more</a></CardSubtitle>
                                <div className='pt-5'>
                                    <CardTitle>Teaching Coordinator</CardTitle>
                                    <CardText>
                                        Lorem ipsum dolor sit.
                                    </CardText>
                                </div>
                            </CardBody>

                        </Card>

                    </div>



                </Row>
            </Container>

            <GetInTouch />
        </>
    );
}
