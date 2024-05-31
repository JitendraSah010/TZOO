import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import { toast } from 'react-toastify';

function AnimalDash_Navbar() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
        const response = await fetch('/user/logout', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            navigate("/");
            toast.success("Logged out successfully");
        } else {
            const errorData = await response.json();
            toast.error(errorData.message);
        }
    } catch (error) {
        console.error('Error logging out:', error.message);
        toast.error(error.message);
    }
}

  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className='m-0 p-0'>
          <h1 className="logo p-0 m-0 ">  <span className="fw-bold navlogoText">T</span><span className="world">ZOO</span><span className='fs-6 text-muted' > (specialist)</span>  </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='text-center d-none d-lg-flex justify-content-center align-items-center'>
            <Link to={'/animal/dashboard'} className='navLink px-2'>Home</Link>
            <Link to={'/animal/attendance'} className='navLink px-2'>Attendance</Link>
            <Link to={'/animal/addAnimal'} className='navLink px-2'>Add animal</Link>
            <Link to={'/animal/MedicalRecord'} className='navLink px-2'>MedicalRecords</Link>
            <Link to={'/animal/message'} className='navLink px-2'>Report Message </Link>
            {/* <form action="" >
              <div className='searchDiv'>
                <input type="search" name="searchInput" className='navLink w-100 px-2 searchBar py-1' placeholder='Search' />
                <button className='searchBtn' > <MdOutlineSearch className='searchIcon'/> </button>
              </div>
            </form> */}
            <Link onClick={logoutHandler} className='navLink px-2 mx-4'>logout</Link>
          </Nav>
{/*-------------------------------for small screen size content----------------------  */}

          <Nav className='text-center  mt-2 d-flex d-lg-none justify-content-center align-items-center'>
            <Link to={'/animal/dashboard'} className='navLink px-2 mb-3'>Home</Link>
            <Link to={'/animal/addAnimal'} className='navLink px-2 mb-3'>Add animal</Link>
            <Link to={'/animal/message'} className='navLink px-2 mb-3 '>Message(5) </Link>
            <Link onClick={logoutHandler} className='navLink px-2 mb-3' >logout</Link>
            {/* <form action="" >
              <div className='searchDiv1 mb-2' >
                <input type="search" name="" className='navLink px-2 searchBar py-1' placeholder='Search' />
                <button className='searchBtn'> <MdOutlineSearch className='searchIcon'/> </button>
              </div>
            </form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AnimalDash_Navbar;