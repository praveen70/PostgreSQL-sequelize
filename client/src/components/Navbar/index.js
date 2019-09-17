import React from 'react';
// import { NavLink } from "react-router-dom";
// import Loginmodal from '../Modal'
import {  Icon } from 'semantic-ui-react'
import { Navbar, Form, Button, FormControl,  Nav } from 'react-bootstrap';
import './navbar.css'
import { withRouter } from 'react-router-dom';


class Navbars extends React.Component{
  logout = () => {
    localStorage.removeItem("authToken")
    this.props.history.push('/')
  }
  render(){
    
    
    return (
      <div>
      
    <Navbar  className="bg-primary justify-content-between  d-block d-md-flex" variant="dark">
      <div className="d-block d-md-flex">
        <Navbar.Brand className="buy" href="#home"><Icon loading name='asterisk' style={{ color: 'white' }} />Buyanything</Navbar.Brand>
       
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
          <Button variant="outline-light" onClick={(e) =>  this.logout(e)}>Logout</Button>
        </Form>
      </div>
      <div>
      <Nav className="mr-auto">
        <Nav.Link href="#pricing">
          {/* <div style={{marginLeft:15 , color: 'white'}}>
              <Loginmodal />
          </div> */}
        </Nav.Link>
    
        <Nav.Link href="#home">
        <div style={{marginLeft:15}}>
                   <a><strong style={{color:'white'}}>More</strong></a>
          </div>
        </Nav.Link>
        <Nav.Link href="#features">
        <div style={{marginLeft:15}}>
            <a><strong><i className="material-icons" style={{color:'white'}}>Cart</i></strong></a>
        </div>
        </Nav.Link>
       
      </Nav>
    
      </div>
    
     
    </Navbar>
    
      </div>
     
    );

  }
}
export default  withRouter(Navbars);


