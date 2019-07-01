import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import {  Checkbox, Form } from 'semantic-ui-react'
import  './modal.css';

class Loginmodal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',

    }
  }
  inputChange = (event) => {
    const { name, value } =  event.target
    console.log(name, value);
    this.setState({ [name] : value})
  }
  handleSubmit = () => {
    console.log(this.state);
  }
  render(){
    return (
  <Modal trigger={<strong>Login & Signup</strong>} centered={false} style={{    width: 'auto',
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
            <input type="text" name="username" value={this.state.username} 
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


export default Loginmodal



