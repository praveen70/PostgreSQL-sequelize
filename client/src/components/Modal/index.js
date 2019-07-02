import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import {  Checkbox, Form } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

import  './modal.css';

class Loginmodal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email : '',
      password : '',
      open: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 10000);
  }
  inputChange = (event) => {
    const { name, value } =  event.target
    console.log(name, value);
    this.setState({ [name] : value})
  }
  handleSubmit = () => {
    let  { email, password } =  this.state;
    let data = {
      email: email,
      password: password,
    }
    axios.post('http://localhost:8081/api/signin/' , data)
    .then(function (response) {
      console.log(response);
      // this.props.history.push('/')
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(this.state);
  }


  closeModel = () => {
    this.setState({ open : false })
  }
  render(){
    return (
  <Modal open={this.state.open} onClose={this.closeModel} trigger={<strong>Login & Signup</strong>} centered={false} style={{    width: 'auto',
    height: 'auto',
    padding: '0 30px 30px',
    left: '50%',
    top: '38%',
    transform: 'translate(-50%, -50%)'}}>

    <Modal.Header>Login</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={require('../../image/index.png')}  />
      <Modal.Description>
        <Form>
            <Form.Field>
            <label>User Name</label>
            <input type="email" name="email" value={this.state.email} 
            onChange={(event) => this.inputChange(event)}
            placeholder='User Name' />
            </Form.Field>
            <Form.Field>
            <label>Password </label>
            <input type="password" name="password" 
            onChange={(event) => this.inputChange(event)}
            value={this.state.password} placeholder='Password' />
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' onClick= {()=> this.handleSubmit()}>Submit</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>

    )
  }
}


export default withRouter(Loginmodal)



