import React from 'react';
import '../../assets/css/aboutus/aboutus.css';
import Header from '../../common/Header';
import { Container, Row } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <>
      {/* <Header/> */}
      <Header isHomePage={false} />
      <div className='abt-section text-center'>
        <h1 className='text-center pt-5'>
          About PixelBot studio
        </h1>

        <Container>
          <Row>
            <h5 className='text-white py-3'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate reprehenderit ipsam neque deserunt ullam optio recusandae veritatis rem odit ipsum. Asperiores fugiat quas laborum aliquid repudiandae facilis incidunt vero at.
            </h5>
          </Row>
        </Container>

      </div>
      <Container style={{ paddingTop: '125px' }}>
        <Row>

          <div className='d-flex justify-content-between'>
            <div>
              <h1>content section</h1>
            </div>

            <div>
            <h1>Image section</h1>
              
            </div>

          </div>
        </Row>
      </Container>
    </>
  );
}
