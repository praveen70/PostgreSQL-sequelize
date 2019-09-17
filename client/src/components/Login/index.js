import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import { loginDataStart  } from '../../action/loginAction';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		};
	}

	inputChange = (e) => {
    const { name, value } = e.target;
	this.setState({ [name]: value });
  };
  
  submit = async (e) => {
	e.preventDefault();
	let data =  this.state;
	this.props.loginDataStart(data)
	
  };

  routePage = (typeUser) => {
	  let [{ roleName }] = typeUser.roles
	  if(roleName === 'ADMIN'){
		  this.props.history.push('/dashboard')
	  }else if(roleName === 'USER'){
		this.props.history.push('/home')
	  }
	
  }
  
  componentWillReceiveProps({...props}) {
	this.routePage(props.payload)
	
}

	render() {
		
		let { email, password } = this.state;
		return (
		<div>
			{/* {!this.props.payload ? */}
				<div class="login-form" >
					<form  method="post" style={{marginTop: 200}}>
						<h2 class="text-center">Log in</h2>       
						<div class="form-group">
							<input type="text" name="email" value={email} class="form-control" 
							onChange={(e) => this.inputChange(e)}
							placeholder="Username" required="required"/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" name="password" value={password} 
							onChange={(e) => this.inputChange(e)}
							placeholder="Password" required="required" />
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-block" onClick={(e) =>this.submit(e)}>Log in</button>
						</div>
						<div class="clearfix">
							<label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
							<a href="#" class="pull-right">Forgot Password?</a>
						</div>        
					</form>
					<p class="text-center"><a href="#">Create an Account</a></p>
				</div>
{/* 
				: this.props.payload.roles[0].roleName === 'ADMIN' ? 
					<Redirect to="/dashboard" push={true} /> :
						<Redirect to="/home" push={true} />
			}} */}


		</div>
		
		);
	}
}

const mapStateToProps = (state) => {
	
	return {
	  payload: state.login.payload,
	
	  
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  loginDataStart: (data) => { dispatch( loginDataStart(data) ) },
   
	}
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
