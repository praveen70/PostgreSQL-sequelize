import React from 'react'
import Navbars from '../Navbar/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submenu from '../Submenu';
import Footer from '../Footer';
import BacktoTop from '../BacktoTop';
import Home from '../Home';
import SignIn from '../Login/login'
import { USERS } from '../../Role'



class Landingpage extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            role : [],
        }
    }
    componentDidMount(){
        USERS.map((item) => {
            this.setState({
                role: item.role
            })
        })
    }
    render() { 
        const { role } =  this.state
        return (
            <div>
                
                    <Router>
                        <Switch>
                        <Route path="/" exact render={() => <SignIn />}  />
                            {/* {role === "admin" && <Route path="/" exact render={() => <Home />}  />}
                            {role === "user" && <Route path="/" exact render={() => <Home />}  />} */}
                        </Switch>
                    </Router>
               
            </div>
        )
    }
}

export default Landingpage;

