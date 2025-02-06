import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../assets/css/services.css';

export default function OurServices() {
    // Maintain the state for the selected tab
    const [selectedTab, setSelectedTab] = useState('home');

    // Handle tab change on label click
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <Container>

                <Row>
                    <h1 className='text-center text-primary fw-bold py-3'>Our services</h1>
                    <p className='py-3 lh-base text-dark text-center fw-normal'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio porro distinctio, placeat quam qui consectetur voluptatum architecto possimus est recusandae repudiandae maxime repellat cupiditate? Soluta fugit assumenda maxime ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam commodi, quo cumque tenetur molestias vel labore culpa fugiat provident aliquam fugit dignissimos voluptatibus exercitationem ipsum at a quibusdam. Magni.

                    </p>
                </Row>

                <Row>
                    <div className="our-service">

                        <div className="content">
                            {/* Radio buttons are hidden but used for managing the state */}
                            <input type="radio" name="slider" checked={selectedTab === 'home'} onChange={() => handleTabChange('home')} id="home" />
                            <input type="radio" name="slider" checked={selectedTab === 'blog'} onChange={() => handleTabChange('blog')} id="blog" />
                            <input type="radio" name="slider" checked={selectedTab === 'help'} onChange={() => handleTabChange('help')} id="help" />
                            <input type="radio" name="slider" checked={selectedTab === 'code'} onChange={() => handleTabChange('code')} id="code" />
                            <input type="radio" name="slider" checked={selectedTab === 'about'} onChange={() => handleTabChange('about')} id="about" />

                            <div className="list border-5  ">
                                <label htmlFor="home" className={`home ${selectedTab === 'home' ? 'active' : ''}`} onClick={() => handleTabChange('home')}>
                                    <span className='text-capitalize'>web development &nbsp; {selectedTab === 'home' && '→'}</span>
                                </label>
                                <label htmlFor="blog" className={`blog ${selectedTab === 'blog' ? 'active' : ''}`} onClick={() => handleTabChange('blog')}>
                                    <span className='text-capitalize '>branding &nbsp; {selectedTab === 'blog' && '→'}</span>
                                </label>
                                <label htmlFor="help" className={`help ${selectedTab === 'help' ? 'active' : ''}`} onClick={() => handleTabChange('help')}>
                                    <span className='text-capitalize'>IT service &nbsp; {selectedTab === 'help' && '→'}</span>
                                </label>
                                <label htmlFor="code" className={`code ${selectedTab === 'code' ? 'active' : ''}`} onClick={() => handleTabChange('code')}>
                                    <span className='text-capitalize'>digital marketing &nbsp;{selectedTab === 'code' && '→'}</span>
                                </label>
                                <label htmlFor="about" className={`about ${selectedTab === 'about' ? 'active' : ''}`} onClick={() => handleTabChange('about')}>
                                    <span className='text-capitalize'>content management &nbsp;{selectedTab === 'about' && '→'}</span>
                                </label>
                                <div className="slider"></div>
                            </div>
                            <div className="col-2"></div>

                            <div className="text-content">
                                {/* Content for Home */}
                                {selectedTab === 'home' && (
                                    <div className="home text">
                                        <div className="title text-capitalize fs-1">web development </div>
                                        <div id="main">
                                            <ul>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  2</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  3</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  4</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  5</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  6</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  7</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  8</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  9</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> 0</li>
                                            </ul>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <Button variant="primary" size="lg" className='text-capitalize my-3'>
                                                web development &nbsp; &#8594;
                                            </Button>

                                        </div>


                                    </div>
                                )}
                                {/* Content for Blog */}
                                {selectedTab === 'blog' && (
                                    <div className="blog text">
                                        <div className="title text-capitalize fs-1">branding</div>
                                        <div id="main">
                                            <ul>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  2</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  3</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  4</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  5</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  6</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  7</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  8</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  9</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> 0</li>
                                            </ul>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant="primary" size="lg" className='text-capitalize my-3'>
                                                branding &nbsp; &#8594;
                                            </Button>
                                        </div>

                                    </div>
                                )}
                                {/* Content for Help */}
                                {selectedTab === 'help' && (
                                    <div className="help text">
                                        <div className="title text-capitalize fs-1">IT service</div>
                                        <div id="main">
                                            <ul>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  2</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  3</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  4</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  5</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  6</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  7</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  8</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  9</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> 0</li>
                                            </ul>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant="primary" size="lg" className='text-capitalize my-3'>
                                                IT service &nbsp; &#8594;
                                            </Button>
                                        </div>
                                    </div>

                                )}
                                {/* Content for Code */}
                                {selectedTab === 'code' && (
                                    <div className="code text">
                                        <div className="title text-capitalize fs-1">digital marketing</div>
                                        <div id="main">
                                            <ul>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  2</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  3</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  4</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  5</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  6</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  7</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  8</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  9</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> 0</li>
                                            </ul>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant="primary" size="lg" className='text-capitalize my-3'>
                                                digital marketing &nbsp; &#8594;
                                            </Button>
                                        </div>
                                    </div>

                                )}
                                {/* Content for About */}
                                {selectedTab === 'about' && (
                                    <div className="about text">
                                        <div className="title text-capitalize fs-1">content management</div>
                                        <div id="main">
                                            <ul>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  2</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  3</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  4</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  5</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  6</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  7</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  8</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  9</a> </li>
                                                <li className='py-2'> <a href="" className='text-decoration-none text-dark'>Link  1</a> 0</li>
                                            </ul>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant="primary" size="lg" className='text-capitalize my-3'>
                                                content management &nbsp; &#8594;
                                            </Button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>



        </>

    );
}
