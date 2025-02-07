import React from 'react'
import { Container, Row, Form, Button, } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/getInTouch.css'
// import { IoLogoWhatsapp } from "react-icons/io";


export default function GetInTouch() {
    return (
        <>
            <Container className='bg-light'>
                <Row>
                    <div className='col-md-6'>
                        <h1 className='text-primary py-5 text-capitalize'>get in touch</h1>

                        <h5 className='text-capitalize fw-bolder'>
                            what drive us ?
                        </h5>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit, distinctio perspiciatis omnis architecto dicta repudiandae hic minima odio numquam atque, non, nulla autem ipsam. Libero est tempore nostrum nihil?
                        </div>

                        <Container>
                            <Row className='py-5'>
                                <div className='d-flex'>
                                    <div className='col-md-3'>
                                        <h3 className='text-danger'>📞</h3>

                                    </div>
                                    <div className='col-md-9'>
                                        <h4>Call</h4>
                                        <a href="#tell:+91-8308606183" className='text-decoration-none text-dark'> +91-8308606183</a>
                                    </div>
                                </div>

                                <div className='d-flex py-5'>
                                    <div className='col-md-3'>
                                        <h3 className='text-danger'>🟢</h3>
                                        {/* <IoLogoWhatsapp style={{ color: 'green', fontSize: '2rem' }}/> */}
                                    </div>
                                    <div className='col-md-9'>
                                        <h4>Whats App</h4>

                                        <div className='d-flex'>

                                            <div>
                                                <a href="#tell:+91-8308606183" className='text-decoration-none text-dark'>🏳️‍🌈 +91-8308606183</a> &nbsp; | &nbsp;
                                            </div>

                                            <div>

                                                <a href="#tell:+91-8308606183" className='text-decoration-none text-dark'>🏁 +91-8308606183</a>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='col-md-3'>
                                        <h3 className='text-danger'>📩</h3>

                                    </div>
                                    <div className='col-md-9'>
                                        <h4>Email</h4>
                                        <a href="#mailTo:nik@gmail.com" className='text-decoration-none text-dark'> nikita@gmail.com</a>
                                    </div>
                                </div>
                            </Row>
                        </Container>

                    </div>

                    <div className='col-md-6'>
                        <Container fluid className="bg-pink shadow bg-body rounded">
                            <div className="contact-form-wrapper d-flex justify-content-center">
                                <Form className="contact-form">
                                    <h5 className="title">Contact us</h5>
                                    <p className="description">
                                        Feel free to contact us if you need any assistance, any help, or another question.
                                    </p>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                            className="form-input"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            className="form-input"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            id="message"
                                            rows={5}
                                            placeholder="Message"
                                            className="form-text-area"
                                            required
                                        />
                                    </Form.Group>
                                    <div className="submit-button-wrapper">
                                        <Button type="submit" className="submit-button">
                                            Send
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Container>

                    </div>
                </Row>
            </Container>
        </>
    )
}
