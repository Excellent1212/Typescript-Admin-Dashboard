import * as React from 'react';
import Logo from '../Common/Logo';
import './Header.css';
interface HeaderProps {
    headerTitle: string
}

class Header extends React.Component<HeaderProps> {

    public render() {
        return (
            <div className="header">
                <Logo logoUrl="http://brandmark.io/logo-rank/random/pepsi.png" />
                <p className="header-title">
                    {this.props.headerTitle}
                </p>
            </div>
        )
    }
}

export default Header;