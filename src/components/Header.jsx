import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const cart= useSelector((state)=>state.cartReducer)
  console.log(wishlist);


  return (
    <Navbar expand="lg" className="bg-warning fixed-top mb-5">
      <Container>
        <Navbar.Brand >
            <Link to={"/"} style={{textDecoration:'none'}}> <i class="fa-brands fa-shopify me-2"></i>{' '}
            E-CART</Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded border-light' ><Link to={"/wishlist"} style={{textDecoration:'none'}}><i class="fa-solid fa-heart"></i> Wishlist<Badge bg="secondary border-rounded ms-2">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={"/cart"} style={{textDecoration:'none'}}><i class="fa-solid fa-cart-shopping"></i> Cart<Badge bg="secondary ms-2">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header