import React from 'react';
import '../css/Navbar.css'
import { Navbar, Nav, Form, Container, Image, } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { SlBag } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
function CustomNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className='p-4' >
        <Container className='contain'>
          <Navbar.Brand href="#home" className='mr-4 mb-2 photo1'><Image src='https://demo.bagisto.com/bagisto-common/themes/shop/default/build/assets/logo-942157c2.svg' height={30} /></Navbar.Brand>
          <Navbar.Toggle className='me-auto togg' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4">
              <Nav.Link href="/Men" className='text-dark'>Men</Nav.Link>
              <Nav.Link href="/Women" className='text-dark'>Women</Nav.Link>
              <Nav.Link href="#link" className='text-dark'>Mobile Cover</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className='d-flex align-items-center form-box'>
            <IoIosSearch className='search-btn' />
            <input type='text' placeholder='Search product here' className=' Search-box' />
            <MdOutlineCameraAlt className='cam-icon'/>
            <FaArrowRightArrowLeft className='ms-4' />
            <SlBag className='icon3 mx-4 me-2' />
            <CiUser className='icon2 ' />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
