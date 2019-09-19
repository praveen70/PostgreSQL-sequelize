import React from 'react'
import { Avatar, Badge } from 'antd';
import  './usertype.css';


const  Usertype = () => {
    const name = localStorage.getItem("roleName")
    return (
      <div className="username">
         <span  style={{ marginLeft: 24 }}>
            <Badge count={1}>
            <Avatar  size="large" icon="user" />       
            </Badge>
            <span className="name"><b>{name}</b></span> 
            
          </span>
      </div>
    )
  
}

export default Usertype;
