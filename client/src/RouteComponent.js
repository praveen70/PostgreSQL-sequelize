import React from 'react';
import Loadable from 'react-loadable';
import Spinner from './components/Spinner';

const Login = Loadable({
      loader: () => import('./components/Login'),
      loader: () => import('./components/Landingpage'),
      loading() {
        return <Spinner />
      }
});


export default Login;