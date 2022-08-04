import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CDBSelect, CDBContainer, CDBBtn } from 'cdbreact';

const Details = () => {
    const [option] = useState([
        {
            text: '1',
            value: '1',
        },
        {
            text: '2',
            value: '2',
        },
        {
            text: '3',
            value: '3',
        },
    ]);
    return (
        <Container>
            <Row className='my-3'>
                <Col sm={4}>
                    <img src='https://z.nooncdn.com/products/tr:n-t_400/v1615814503/N43264515V_1.jpg' alt='none' />
                </Col>

                <Col sm={4}>
                    <div>adidas Originals</div>
                    <div>Adicolor Classics 3-Stripes T-Shirt Hazy Copper
                    </div>
                    <div>
                        <span>Model Number : GN2916 | 4.8 Rating</span>
                    </div>
                    <div>Was:  EGP 750</div>
                    <div>Now: <b>EGP 510</b> Inclusive of VAT</div>
                    <div>Saving: EGP 230</div>
                    <div className='my-3'><img style={{ width: '100%' }} src='https://k.nooncdn.com/cms/pages/20220419/7e4b7c8e9d1f4d6dc041e183e07ff1e1/en_pdp-01.png' alt='none' /></div>
                    <div>
                        <Row className='my-3'>
                            <Col sm={3}>
                                <CDBSelect style={{ width: '100%' }} options={option} selected="Quantity" />
                            </Col>
                            <Col sm={9}>
                                <CDBBtn style={{ width: '100%' }} color="warning">ADD To Cart</CDBBtn>
                            </Col>
                        </Row>
                    </div>
                    <div>size:</div>
                    <div>
                        <CDBSelect style={{ width: '100%' }} options={option} selected="XL" />
                    </div>
                    <div className='mt-3'>color:</div>
                    <div>
                        <CDBSelect style={{ width: '100%' }} options={option} selected="RED" />
                    </div>
                    <hr className='my-5'/>
                </Col>

                <Col sm={4}>
                    <div>seller:</div>
                    <div>NOON FASHON</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Details