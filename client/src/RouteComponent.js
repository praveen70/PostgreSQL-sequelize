import React from 'react';
import Loadable from 'react-loadable';
import Spinner from './components/Spinner';

const Login = Loadable({
      loader: () => import('../src/components/Login/index'),
      loader: () => import('../src/components/Landingpage/index'),
      loading() {
        return <Spinner />
      }
});


export default Login;