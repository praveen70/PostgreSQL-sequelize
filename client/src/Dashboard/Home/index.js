import React from 'react';
import {  Link } from "react-router-dom";
// import {  Icon } from 'semantic-ui-react'
// import easy from '../../image/easy.jpg'
import { Layout, Menu, Breadcrumb , Icon, Avatar, Badge} from 'antd';
import Group from '../Group';
import Categories from '../Categories';
import Logout from '../Logout';
import Usertype from '../Usertype'
import Logo from '../Icon'
import './home.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

 
  render() {
    return (
      <Layout>
       
    <Header className="header">
    
      <div className="logo" >
        <div className="d-flex justify-content-between flex-row" >
        <Logo/>
          {/* <div className="d-flex">
            <Icon loading name='asterisk' className="icon"  />
            <span className="buyanything" >Buyanything</span>
          </div> */}
          <div className="d-flex">
            <Group className="group" />
            <Categories  /> 
            <Logout className="logout" />
            <Usertype />
            {/* <span style={{ marginLeft: 24 }}>
            <Badge count={1}>
            <Avatar  size="large" icon="user" />
            </Badge>
          </span> */}
          </div>
        </div>
      </div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          theme="red"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
       
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="edit" />
                Product
              </span>
            }
          >
            <Menu.Item key="1">
              <span>
                <Icon type="plus-circle" theme= "twoTone" />
                <Link to="/products">Add Product</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
               Role
              </span>
            }
          >
            <Menu.Item key="5">Add Role</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  
  </Layout>
    );
  }
}