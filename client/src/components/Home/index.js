import React from 'react';
import Slider from '../Imageslider/index';
import Carddata from '../Carddata';
import Newmobile from '../Mobilenewlaunches';
import Toprefurbished from '../Toprefurbished';
import Privacycontent from '../Privacycontent';
import Offer from '../Offersonly';
import { Skeleton } from 'antd';
import Navbars from '../Navbar/index'
import Submenu from '../Submenu/index'
import { withRouter } from 'react-router-dom';


// const Home = () => {
//     return (
//         <div>
//             <Slider />
//             <Carddata />
//             <Offer />
//             <Newmobile />
//             <Toprefurbished />
//             <Privacycontent />
//         </div>
//     )
// }
class Home extends React.Component {
    state = {
        sliderComp : false,
        cardDataComp: false,
        ofeerComp : false,
        newMobileComp:false,
        ToprefurbishedComp:false,
        // Privacycontent:false

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({sliderComp: true});
        }, 1000);
        setTimeout(() => {
            this.setState({cardDataComp: true});
        }, 2000);
        setTimeout(() => {
            this.setState({ofeerComp: true});
        }, 3000);
        setTimeout(() => {
            this.setState({newMobileComp: true});
        },4000);
        setTimeout(() => {
            this.setState({ToprefurbishedComp: true});
        },5000);
       

    }
 
    render () {
        const {sliderComp, cardDataComp, ofeerComp, newMobileComp, ToprefurbishedComp} = this.state;
        return (
            <div>
            <Navbars/>
            <Submenu />
                {sliderComp ? <Slider /> : <Skeleton />}
                {cardDataComp ? <Carddata /> : <Skeleton />}
                {ofeerComp ? <Offer /> : <Skeleton />}
                {newMobileComp ? <Newmobile /> : <Skeleton />}
                {ToprefurbishedComp ? <Toprefurbished /> : <Skeleton />}
                {/* {Privacycontent ? <Privacycontent /> : <Skeleton />} */}

                {/* <Carddata /> */}
                {/* <Offer /> */}
                {/* <Newmobile /> */}
                {/* <Toprefurbished /> */}
                <Privacycontent />
            </div>
        )
    }
}
export default withRouter(Home);