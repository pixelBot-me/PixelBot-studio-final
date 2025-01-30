import React from 'react'
import { Row, Container } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/footer.css'
import logoImg from '../assets/images/PixelBot_Logo_White.svg'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer">
                <Container>
                    <div className="footer-row">
                        <div className="footer-col py-3">
                            {/* <h4>Our Offices</h4>
                            <div className="footer-subcol">India</div>
                            <div className="footer-subcol">USA 2</div>
                            <div className="footer-subcol">UAE</div> */}
                            <h4 className='fw-bold'>abc@gmail.com</h4>
                        </div>
                        <div className="footer-col">
                            <img src={logoImg} alt="logo" srcset="" width={100} height={100}/>
                        </div>
                    </div>
                    <div className="footer-row py-3">
                        <div className="footer-col">
                            <div className='my-3'>
                                <a href="#" className='text-decoration-none text-white fs-4 fw-bold'>Services</a>
                            </div>
                            <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Services</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Services</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Services</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Services</a>
                            </div>

                        </div>
                        <div className="footer-col">
                            <div className='my-3'>
                                <a href="#" className='text-decoration-none text-white fs-4 fw-bold'>Hire Developers</a>
                            </div>
                            <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Hire Developers</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Hire Developers</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Hire Developers</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Hire Developers</a>
                            </div>

                        </div>
                        <div className="footer-col">
                            <div className='my-3'>
                                <a href="#" className='text-decoration-none text-white fs-4 fw-bold'>Learn</a>
                            </div>
                            <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Learn</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Learn</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Learn</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Learn</a>
                            </div>                            
                        </div>
                        <div className="footer-col">
                            <div className='my-3'>
                                <a href="#" className='text-decoration-none text-white fs-4 fw-bold'>Solutions</a>
                            </div>
                            <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Solutions</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Solutions</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Solutions</a>
                            </div>  <div className='py-3'>
                                <a href="#" className='text-decoration-none text-white'>Solutions</a>
                            </div>       
                        </div>
                    </div>
                    <div className="footer-bottom py-3">
                        <p>&copy; 2025 Your Website</p>
                        <p>Privacy Policy</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}
