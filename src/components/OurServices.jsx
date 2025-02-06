import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../assets/css/services.css';
import '../assets/css/common.css'

export default function OurServices() {
    const [selectedTab, setSelectedTab] = useState('web_dev');
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <Container>

                <Row>
                    <h1 className='text-center thm-clr fw-bold py-3'>Our services</h1>
                    <p className='py-3 lh-base text-dark text-center fw-normal'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio porro distinctio, placeat quam qui consectetur voluptatum architecto possimus est recusandae repudiandae maxime repellat cupiditate? Soluta fugit assumenda maxime ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam commodi, quo cumque tenetur molestias vel labore culpa fugiat provident aliquam fugit dignissimos voluptatibus exercitationem ipsum at a quibusdam. Magni.

                    </p>
                </Row>

                <Row>
                    <div className="our-service">

                        <div className="content">
                            <input type="radio" name="slider" checked={selectedTab === 'web_dev'} onChange={() => handleTabChange('web_dev')} id="web_dev" />
                            <input type="radio" name="slider" checked={selectedTab === 'branding'} onChange={() => handleTabChange('branding')} id="branding" />
                            <input type="radio" name="slider" checked={selectedTab === 'it_services'} onChange={() => handleTabChange('it_services')} id="it_services" />
                            <input type="radio" name="slider" checked={selectedTab === 'dig_mark'} onChange={() => handleTabChange('dig_mark')} id="dig_mark" />
                            <input type="radio" name="slider" checked={selectedTab === 'cont_manag'} onChange={() => handleTabChange('cont_manag')} id="cont_manag" />

                            <div className="list border-5  ">
                                <label htmlFor="web_dev" className={`web_dev ${selectedTab === 'web_dev' ? 'active' : ''}`} onClick={() => handleTabChange('web_dev')}>
                                    <span className='text-capitalize'>web development &nbsp; {selectedTab === 'web_dev' && '→'}</span>
                                </label>
                                <label htmlFor="branding" className={`branding ${selectedTab === 'branding' ? 'active' : ''}`} onClick={() => handleTabChange('branding')}>
                                    <span className='text-capitalize '>branding &nbsp; {selectedTab === 'branding' && '→'}</span>
                                </label>
                                <label htmlFor="it_services" className={`it_services ${selectedTab === 'it_services' ? 'active' : ''}`} onClick={() => handleTabChange('it_services')}>
                                    <span className='text-capitalize'>IT service &nbsp; {selectedTab === 'it_services' && '→'}</span>
                                </label>
                                <label htmlFor="dig_mark" className={`dig_mark ${selectedTab === 'dig_mark' ? 'active' : ''}`} onClick={() => handleTabChange('dig_mark')}>
                                    <span className='text-capitalize'>digital marketing &nbsp;{selectedTab === 'dig_mark' && '→'}</span>
                                </label>
                                <label htmlFor="cont_manag" className={`cont_manag ${selectedTab === 'cont_manag' ? 'active' : ''}`} onClick={() => handleTabChange('cont_manag')}>
                                    <span className='text-capitalize'>content management &nbsp;{selectedTab === 'cont_manag' && '→'}</span>
                                </label>
                                <div className="slider"></div>
                            </div>
                            <div className="col-2"></div>

                            <div className="text-content">
                                {/* Content for web_dev */}
                                {selectedTab === 'web_dev' && (
                                    <div className="web_dev text">
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
                                            <Button size="lg" className='text-capitalize my-3 bg-theme'>
                                                web development &nbsp; &#8594;
                                            </Button>

                                        </div>


                                    </div>
                                )}
                                {/* Content for branding */}
                                {selectedTab === 'branding' && (
                                    <div className="branding text">
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

                                            <Button size="lg" className='text-capitalize my-3 bg-theme'>
                                                branding &nbsp; &#8594;
                                            </Button>
                                        </div>

                                    </div>
                                )}
                                {/* Content for it_services */}
                                {selectedTab === 'it_services' && (
                                    <div className="it_services text">
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

                                            <Button size="lg" className='text-capitalize my-3 bg-theme'>
                                                IT service &nbsp; &#8594;
                                            </Button>
                                        </div>
                                    </div>

                                )}
                                {/* Content for dig_mark */}
                                {selectedTab === 'dig_mark' && (
                                    <div className="dig_mark text">
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

                                            <Button size="lg" className='text-capitalize my-3 bg-theme'>
                                                digital marketing &nbsp; &#8594;
                                            </Button>
                                        </div>
                                    </div>

                                )}
                                {/* Content for cont_manag */}
                                {selectedTab === 'cont_manag' && (
                                    <div className="cont_manag text">
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

                                            <Button size="lg" className='text-capitalize my-3 bg-theme'>
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
