import React from 'react'
import Navbars from '../Navbar/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducer/index';
import rootSaga from '../../saga';

import Submenu from '../Submenu';
import Footer from '../Footer';
import BacktoTop from '../BacktoTop';
import Home from '../Home';
import SignIn from '../Login/login'
import { USERS } from '../../Role'
import Login from '../Login'
import axios from 'axios'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// then run the saga
sagaMiddleware.run(rootSaga)


class Landingpage extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            roleName : ''
        }
    }

    componentDidMount() {
        fetch("http://localhost:8082/api/signup/")
          .then(res => res.json())
          .then(
            (result) => {
                let localStorageID = localStorage.getItem("userID");
                let [ { roleName }] = result
                result.map((item) => {
                    if(localStorageID === item.userID){
                        let [ { roleName }] = item.roles
                        this.setState({
                          isLoaded: true,
                          roleName: roleName
                        });
                        
                        console.log(roleName)
                    }
                })
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() { 
        const { roleName } =  this.state
       
        return (
            <div>
                 <Provider store={store}>
                
                    <Router>
                        <Switch>
                        <Route path="/" exact render={() => <Login />}  />
                        {roleName  && <Route path="/home"  render={() => <Home />}  />}
                            {/* {role === "admin" && <Route path="/" exact render={() => <Home />}  />}
                            {role === "user" && <Route path="/" exact render={() => <Home />}  />} */}
                        </Switch>
                    </Router>
                    </Provider>
            </div>
        )
    }
}

export default Landingpage;

