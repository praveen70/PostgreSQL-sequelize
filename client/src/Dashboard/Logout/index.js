import React, { Component } from 'react';
import { Button ,  Icon} from 'antd';
import { withRouter } from 'react-router-dom';
import './logout.css';

class Logout extends Component {
    logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("roleName");
        this.props.history.push('/')
    }
  render() {
    return (
      <div>
         <Button size= 'large' type="primary" onClick={this.logout} ghost>
         <Icon type="logout" />Logout
            </Button>
      </div>
    )
  }
}

export default withRouter(Logout)
