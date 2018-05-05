import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DataForm from './components/Common/DataForm';
import ItemList from './components/Common/ItemList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header headerTitle="Hello This is TypeScript React App" />
        <DataForm firstName="big" lastName="Star" birthday="1999292" phoneNumber="+227837483" />
        <p>Here is list of Items</p>
        <ItemList />
          <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
