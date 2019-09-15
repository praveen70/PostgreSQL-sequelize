import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { USERS}  from  '../../Role';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: '',
			password: ''
		};
	}

	pageChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
		this.setState({ [name]: value });
  };
  
  submit = (e) => {
	  e.preventDefault();
    let data = {
      firstname: this.state.firstname,
      password: this.state.password,
      "role" : 'admin'
    }
    USERS.map((item) => {
      if(item.role === data.role){
          return <h2>Praveen</h2>
      }else{
        return <span>No route</span>
      }
    })
   
  }

	render() {
		let { firstname, password } = this.state;
		return (
			<Form METHOD="POST">
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder="First Name"
						name="firstname"
						value={firstname}
						onChange={(e) => this.pageChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => this.pageChange(e)}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button type="submit" onClick={(e) => this.submit(e)}>Submit</Button>
			</Form>
		);
	}
}

export default Login;
