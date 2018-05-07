import * as React from 'react';
import Logo from '../Common/Logo';
import logo from '../../assets/image/logo.png';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import './HeaderComponent.css';
interface HeaderProps {
    headerTitle?: string
}

class HeaderComponent extends React.Component<HeaderProps> {

    public render() {
        return (
            <Header className="header">
                <Logo logoUrl={logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <span>{this.props.headerTitle}</span>
            </Header>
        )
    }
}

export default HeaderComponent;