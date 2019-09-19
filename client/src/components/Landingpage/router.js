import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Home from '../Home';
import Dashboard from '../../Dashboard/Home/index';
import PrivateRoute from '../../PrivateRoute'

class Routers extends Component {
    constructor(props){
        super(props)
        this.state = {
            roleType: '',
        }
    }
    componentWillReceiveProps({...props}) {
        let [{roleName}] = props.payload.roles;
        localStorage.setItem("roleName",roleName) 
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Login  />}  />
                    <PrivateRoute path="/home"  component={Home}  />
                    <PrivateRoute path="/dashboard"   component={Dashboard} />
                </Switch>
            </Router>
        )
    }
} 

const mapStateToProps = (state) => {
	return {
	  payload: state.login.payload,
	}
}


  export default connect(mapStateToProps)(Routers);
