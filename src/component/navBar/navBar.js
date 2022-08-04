import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBBtn,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
  CDBContainer, CDBInputGroup, CDBInput,
} from 'cdbreact';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CatagoryDetails from '../Reusable Component/CatagoryDetails';

const Navbar = () => {
  const [collapse2, setCollapse2] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };

  return (
    
    <div style={{ backgroundColor: '#000000' }}>
      <CDBContainer>
        <Row>
          <Router style={{ width: '100%' }}>
            <CDBNavbar style={bgBlack} dark expand="md" scrolling>
              <CDBNavBrand href="/">
                <strong>NOON</strong>
              </CDBNavBrand>
              <CDBNavToggle
                onClick={() => {
                  setCollapse2(!collapse2);
                }}
              />
              <CDBCollapse id="navbarCollapse1" isOpen={collapse2} navbar>
                <Col sm={9}>
                  <CDBNavbarNav left className="align-items-center">
                    <CDBNavItem onMouseOver={handleShow}>
                      <CDBDropDown>
                        <CDBDropDownToggle caret style={{ padding: 0 }} color="dark" circle>
                          Categories
                        </CDBDropDownToggle>
                        <CDBDropDownMenu>Coming soon #pleaseStayUpdated.</CDBDropDownMenu>
                      </CDBDropDown>
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBInputGroup />
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">Help</CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">About</CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                  </CDBNavbarNav>
                </Col>
                <Col sm={3}>
                  <CDBNavbarNav right>
                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">
                          <CDBIcon className="mr-2" icon="globe" />
                          EN
                        </CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>

                    <CDBNavItem>
                      <CDBBtn circle color="dark" style={{ padding: 0 }}>
                        <CDBNavLink to="#">
                          <CDBIcon className="mr-2" icon="user" />
                          Login
                        </CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                    <CDBNavItem>
                      <CDBBtn color="white" style={{ padding: '0px 10px' }}>
                        <CDBNavLink to="#" style={{ color: '#000' }}>
                          Sign Up
                        </CDBNavLink>
                      </CDBBtn>
                    </CDBNavItem>
                  </CDBNavbarNav>
                </Col>
              </CDBCollapse>
            </CDBNavbar>
          </Router>
        </Row>
      </CDBContainer>
      <Offcanvas className='h-50' placement={'top'} show={show} >
        <Offcanvas.Header>
          <Offcanvas.Title>Catagories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body onMouseOut={handleClose} >
          <CatagoryDetails>
           
          </CatagoryDetails>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default Navbar;