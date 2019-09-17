import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landingpage from './RouteComponent';
import './App.css';
import Dashboard from '../src/Dashboard/Home/index'




class App extends React.Component{
	constructor(props){
        super(props)
        this.state= {
          
        }
    }

	
	render(){
			
			return(
				<div>
				  <Landingpage />
				</div>
				 
				 )
		
	}
}
export default App;
