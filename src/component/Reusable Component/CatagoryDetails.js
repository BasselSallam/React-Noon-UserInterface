import React from 'react'
import PropTypes from 'prop-types'
import {CDBContainer} from 'cdbreact'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function CatagoryDetails(props) {
  return (
    <CDBContainer>
              <Row>

                <Col sm={6}>
                    Top Brands
                    <div className='d-flex flex-wrap'>
                        <div>
                            <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png'/>
                        </div>
                        <div>
                            <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png'/>
                        </div>
                        <div>
                            <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png'/>
                        </div>
                        <div>
                            <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png'/>
                        </div>

                    </div>

                </Col>


                <Col sm={4}>
                    <img src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-01.png' />
                </Col>


                <Col sm={2}>
                    <img src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-02.png' />

                </Col>
              </Row>

            </CDBContainer>

  )
}


export default CatagoryDetails
