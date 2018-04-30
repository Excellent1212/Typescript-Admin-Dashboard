import * as React from 'react';
import './Logo.css';

interface LogoProps {
    logoUrl?: string
}

export default class Logo extends React.Component<LogoProps> {
    render() {
        return (
            <div className="logo">
              <img src={this.props.logoUrl}/>
            </div>
        )
    }
}