 
import Container from 'react-bootstrap/Container';
import Cart from './Cart';
 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";
import{useSelector} from "react-redux";
 
 
 
 

function NavScrollExample() {
  const state= useSelector((state)=>state.hundeleCard)
  return (
    <Navbar bg="light bg-white py-3  shadow-sm" expand="lg  py-3  "   >
      <Container >
        <Navbar.Brand  className=" Navbar-Brand fw-bold fs-4" to="#"> SMA STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          ><Nav.Link as={Link} to="/">  Home</Nav.Link>  
            <Nav.Link as={Link} to="/Product"> Product</Nav.Link>
            <Nav.Link  as={Link} to="/About"> About</Nav.Link>
        
                      
            <Nav.Link href="#" >   Contact  </Nav.Link>       
          
          </Nav>
       <div className='buttons'>
        < NavLink as={Link} to ="/Login" className='btn btn-outline-dark'><i className='fa fa-sign-in me-1'></i>Login</NavLink>
        < NavLink as={Link} to ="/Register" className='btn btn-outline-dark ms-2'><i className='fa fa-user-plus me-1'></i>Register</NavLink>
        <  NavLink as={Link} to ="Cart"  className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart({state.length})</NavLink>
       </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;