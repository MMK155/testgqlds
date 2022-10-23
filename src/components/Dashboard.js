
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    FundProjectionScreenOutlined 
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  const { Header, Content, Footer, Sider } = Layout;
  const nameUrl = window.location.href;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const SubMenu = Menu.SubMenu;
  
  const Dashboard = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
  

  
    
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
  
        {/* sidebar   */}
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{fontSize:'18px'}}>
          <div className="logo" />
          <h1 style={{ fontSize: "26px", marginTop: '6px', color: "white" }}>Logo Goes Here</h1>
  
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{fontSize:'18px',lineHeight:'24px'}} >
          
          <Menu.Item style={{fontSize:'18px',lineHeight:'30px'}}><Link to="/">Dashboard</Link></Menu.Item>
          {/* companies submenu */}
        
          <SubMenu
          style={{fontSize:'18px'}}
            key="sub1"
            title={
              <span>
                <DesktopOutlined />
                <span>Cat</span>
              </span>
            }
          >

            
            <Menu.Item style={{fontSize:'18px'}} key="1"><Link to="/create-cat">Add Cat</Link></Menu.Item>
            <Menu.Item style={{fontSize:'18px'}} key="2"><Link to="/cats">Tenant Company</Link></Menu.Item>

            
          </SubMenu>
          
        </Menu>
      </Sider>
  
        {/* Header */ }
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          background: 'white'
        }}
      >
       
      </Header>
  
      {/* body content   */}
      {/* all app content goes here as a children */}
      <Content
        style={{
          margin: '0 16px',
        }}
      >
        <div className="site-layout-background">
          {children}
        </div>
      </Content>
  
  
      {/* footer section */}
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MM ©2022 Created by MM
      </Footer>
    </Layout>
      </Layout >
    );
  };
  
  export default Dashboard;
