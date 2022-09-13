import logo from './brusmax-logo.png'
import {ConnectButton} from './VoteSection'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header({setWallet}){
  return (
    <>
      <Navbar className="navbar-expand-lg navbar-light  main-header">
        <Container className="container-fluid">
          <Navbar.Collapse className="" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>       
          </Navbar.Collapse>

          <Container className="float-end">              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='ms-auto float-end'>
                <Nav className="me-auto">
                  <ConnectButton setWallet={setWallet}></ConnectButton>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Container>
      </Navbar>
    </>
  )

}

export default Header;