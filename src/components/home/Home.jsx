import React from 'react'
import { Container, Row } from 'reactstrap'
import '../../assets/css/header.css'

export default function Home() {
    return (
        <>

            <Container>


                <Row>

                    <div className='text-center py-5'>

                        <h1 className='text-primary fs-1'>Trusted by 600+ and Startups and</h1>
                        <h1 className='fs-1 py-1'>Enterprises across 20+ Nations</h1>


                        <div className='py-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi temporibus ut, quibusdam ipsam ratione vitae commodi, consequuntur aut officia sint illum? Nostrum fugit labore consequatur officiis unde maxime accusantium.
                        </div>

                        <div>
                            <a href="#" className='text-decoration-none text-primary fs-5 py-5'>learn more about us →</a>
                        </div>

                    </div>

                </Row>
            </Container>


        </>
    )
}
