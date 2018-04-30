import * as React from 'react';

interface HeaderProps {
    headerTitle: string
}

class Header extends React.Component<HeaderProps> {

    public render() {
        return (
            <div className="App">
                <p className="App-intro">
                    {this.props.headerTitle}
                </p>
            </div>
        )
    }
}

export default Header;