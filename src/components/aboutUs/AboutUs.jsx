import React from 'react';
import '../../assets/css/aboutus/aboutus.css';
import Header from '../../common/Header';
import { Card, CardBody, CardSubtitle, CardTitle, Container, Image, Row } from 'react-bootstrap';
import abtDetail from '../../assets/images/abot-us/abt-detail.jpg'

import image1 from '../../assets/images/softwareDev.jpg';
import GetInTouch from '../GetInTouch';

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
      <Container>
        <Row>

          <div className='d-flex justify-content-between my-5'>
            <div className='col-md-6'>
              <h1 className='text-capitalize' >your tech partner for <span className='fs-1' style={{
                background: 'linear-gradient(45deg, #20274c, #7ebcebf0)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>digital transformation</span></h1>

              <div className='py-3 fw-normal'>
                <h6 className='lh-base'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magnam alias cum nisi blanditiis a explicabo voluptatum enim at veritatis reiciendis pariatur officia debitis molestias optio, dolorum expedita, cumque possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum hic molestiae libero! Quas quasi sequi aliquid nulla laboriosam ratione assumenda voluptatem quia. Quisquam doloremque eligendi incidunt recusandae debitis ea! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic accusantium, eaque vel provident voluptatem dolor officiis voluptates maxime tenetur similique in et distinctio voluptate illo dolores nihil neque! Possimus.
                </h6>

                <h6 className='lh-base pt-3'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magnam alias cum nisi blanditiis a explicabo voluptatum enim at veritatis reiciendis pariatur officia debitis molestias optio, dolorum expedita, cumque possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum hic molestiae libero! Quas quasi sequi aliquid nulla laboriosam ratione assumenda voluptatem quia. Quisquam doloremque eligendi incidunt recusandae debitis ea! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic accusantium, eaque vel provident voluptatem dolor officiis voluptates maxime tenetur similique in et distinctio voluptate illo dolores nihil neque! Possimus.
                </h6>

                <h3 className='lh-base pt-4'>
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil alias vel excepturi voluptate, maiores eos repellat recusandae quidem sunt ad."
                </h3>
              </div>
            </div>



            <div className='col-md-6'>
              <div>
                <img src={abtDetail} alt="" className='w-75 abt-detail-img' />
              </div>

            </div>

          </div>
        </Row>
      </Container>

      <Container>

        <Row className='my-5'>
          <div className='d-flex gap-5'>
            <div>
              <Card className='shadow mb-5 bg-body rounded-5' style={{ width: '18rem' }}>
                <CardBody className='bg-theme text-white py-4 text-center rounded-5'>
                  <CardTitle className='fw-bolder fs-1'>1600+</CardTitle>
                  <CardSubtitle className='pt-3'>okokokokokokokokok</CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className='shadow mb-5 bg-body rounded-5' style={{ width: '18rem' }}>
                <CardBody className='bg-theme text-white py-4 text-center rounded-5'>
                  <CardTitle className='fw-bolder fs-1'>1500+</CardTitle>
                  <CardSubtitle className='pt-3'>okokokokokokokokok</CardSubtitle>
                </CardBody>
              </Card>
            </div><div>
              <Card className='shadow mb-5 bg-body rounded-5' style={{ width: '18rem' }}>
                <CardBody className='bg-theme text-white py-4 text-center rounded-5'>
                  <CardTitle className='fw-bolder fs-1'>15+</CardTitle>
                  <CardSubtitle className='pt-3'>okokokokokokokokok</CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className='shadow mb-5 bg-body rounded-5' style={{ width: '18rem' }}>
                <CardBody className='bg-theme text-white py-4 text-center rounded-5'>
                  <CardTitle className='fw-bolder fs-1'>9+</CardTitle>
                  <CardSubtitle className='pt-3'>okokokokokokokokok</CardSubtitle>
                </CardBody>
              </Card>
            </div>

          </div>

          <h2 className='text-center text-capitalize'>
            Lorem ipsum dolor sit amet <span className='fs-2 fw-bolder'>consectetur adipisicing elit.</span>
          </h2>

          <div className='d-flex gap-5 featured-brand-logo justify-content-center py-5'>
            <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
            <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
            <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
            <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
            <Image src={image1} className='img-fluid' width={100} height={100} roundedCircle alt="brand-logo" />
          </div>

          <div className='py-5 fs-2 text-center fw-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate molestias qui temporibus error, at animi debitis quasi nisi libero voluptatum voluptas, atque eius. Molestias accusamus quibusdam quis sint sed?, atque eius. Molestias accusamus quibusdam quis sint sed?, atque eius. Molestias accusamus quibusdam quis sint sed?
          </div>
        </Row>
      </Container>


      <GetInTouch/>
    </>
  );
}
