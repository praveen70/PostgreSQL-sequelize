import React from 'react'
import Navbars from '../Navbar/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submenu from '../Submenu';
import Footer from '../Footer';
import BacktoTop from '../BacktoTop';
import Home from '../Home';

class Landingpage extends React.Component {
    render() {
       
        
        return (
            <div>
                <Navbars />
                <Submenu />
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </Router>
                <BacktoTop />
                <Footer/>
            </div>
        )
    }
}

export default Landingpage;