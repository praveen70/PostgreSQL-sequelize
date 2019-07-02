import React from 'react'
import Navbars from '../Navbar/index';

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
                <Home />
                <BacktoTop />
                <Footer/>
            </div>
        )
    }
}

export default Landingpage;