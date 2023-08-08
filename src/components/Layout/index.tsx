import { useState } from 'react';
import {  useNavigate, Outlet } from 'react-router-dom'
import './index.scss'

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('home', '/home', <PieChartOutlined />),
  getItem('about', '/about', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const LbyLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['']);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigateTo = useNavigate()

  const menuClick = (e: {key: string}) => {
    console.log(e.key);
    navigateTo(e.key)
  }

  const handleOpenChange = (keys: string[]) => {
    // 实现手风琴效果----只展开一项
    setOpenKeys(keys.length > 0 ? [keys[keys.length - 1]] : [])
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <div className="demo-logo-vertical">11111</div> */}
        <Menu
          theme="dark"
          defaultSelectedKeys={['/home']}
          mode="inline"
          triggerSubMenuAction="hover"
          items={items}
          onClick={menuClick}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {/* <Breadcrumb style={{ margin: '18px 0 18px 20px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
        </Header>
        <Content style={{ margin: '8px 8px 0' }} className="layout-content-box">
            <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center', padding: 6 }}>Ant Design ©2023 Created by Ant UED ---- lby</Footer>
      </Layout>
    </Layout>
  );
};

export default LbyLayout;