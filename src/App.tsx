import * as React from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
// import DataForm from './components/Common/DataForm';
// import ItemList from './components/Common/ItemList';

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


{/*<DataForm firstName="big" lastName="Star" birthday="1999292" phoneNumber="+227837483" />*/}
{/*<p>Here is list of Items</p>*/}
{/*<div>*/}
    {/*<ItemList />*/}
    {/*<p className="App-intro">*/}
        {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
    {/*</p>*/}
{/*</div>*/}