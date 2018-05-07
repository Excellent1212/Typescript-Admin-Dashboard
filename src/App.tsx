import * as React from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';

import { Layout } from 'antd';

import LeftMenu from './components/LeftMenu/LeftMenu';
import ContentComponent from './components/Content/ContentComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Layout style={{display: 'initial'}}>
              <HeaderComponent />
              <Layout>
                  <LeftMenu />
                  <ContentComponent />
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
