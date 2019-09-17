import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './home.css'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
           
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user-add" />
                  <span>Role</span>
                </span>
              }
            >
              <Menu.Item key="1">Create Role</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Root</span>
                </span>
              }
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
             
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 980,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}