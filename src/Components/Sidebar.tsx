import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu } from "antd";
import {
    DashboardOutlined,
	TeamOutlined,
    SmileOutlined,
    ApartmentOutlined,
    DollarCircleOutlined,
    WalletOutlined,
    CarOutlined,
    SettingOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar ():JSX.Element {
    const [collapsed, setCollapsed] = useState(false);
    let navigate = useNavigate();

    return (
        <Sider 
            collapsible collapsed={collapsed} onCollapse={setCollapsed} collapsedWidth={60}
            style={{
                borderRadius: '15',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
        >
        <div
            style={{ 
                color: 'white',
                textAlign: 'center',
            }}
        >
            <img src="https://i.ibb.co/5FGv7Mc/Stellar2.png" width={60} onClick={() => navigate("/")} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={[]} mode="inline"
            style={{ }}
        >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="summary">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="2" icon={<TeamOutlined />} title="Social">
                <Menu.Item key="3" icon={<SmileOutlined />}><Link to="friends">Friends</Link></Menu.Item>
                <Menu.Item key="4" icon={<ApartmentOutlined />}><Link to="groups">Groups</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="5" icon={<DollarCircleOutlined />} title="Offers">
                <Menu.Item key="6" icon={<WalletOutlined />}><Link to="insurance">Insurance</Link></Menu.Item>
                <Menu.Item key="7" icon={<CarOutlined />}><Link to="cars">Cars</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<SettingOutlined />}>
                <Link to="settings">Settings</Link>
            </Menu.Item>
        </Menu>
        </Sider>
    )
}