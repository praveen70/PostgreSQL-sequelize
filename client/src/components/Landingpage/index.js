import React from 'react'
// import Navbars from '../Navbar/index';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import Routers from './router';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducer/index';
import rootSaga from '../../saga';

// import Submenu from '../Submenu';
// import Footer from '../Footer';
// import BacktoTop from '../BacktoTop';
// import Home from '../Home';
// import SignIn from '../Login/login'
// import { USERS } from '../../Role'
// import Login from '../Login'
// import axios from 'axios'
// import Dashboard from '../../Dashboard/Home/index'
// import { connect } from 'react-redux';

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// then run the saga
sagaMiddleware.run(rootSaga)


class Landingpage extends React.Component {
    render() { 
      
        return (
            <div>
                 <Provider store={store}>
                    <Routers /> 
                </Provider>
            </div>
        )
    }
}

// const Landingpage = ({...props}) => {
//   console.log("from landing page",this.props)
//   return(
//     <div>
//                  <Provider store={store}>
                
//                     <Router>
//                         <Switch>
//                         <Route path="/" exact render={() => <Login />}  />
//                         {/* {roleName  && <Route path="/home"  render={() => <Home />}  />}
//                         {roleName && <Route path="/dashboard"  render={() => <Dashboard />}  />} */}
//                             {/* 
//                             {role === "user" && <Route path="/" exact render={() => <Home />}  />} */}
//                         </Switch>
//                     </Router>
//                     </Provider>
//             </div>
//   )
// }

export default Landingpage;

