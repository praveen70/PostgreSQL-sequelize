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
                 <Provider store={store}>
                
                    <Router>
                        <Switch>
                        <Route path="/" exact render={() => <SignIn />}  />
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

