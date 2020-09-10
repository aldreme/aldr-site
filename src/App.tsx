import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './util/i18n';

import NavBarHome from './components/NavBarHome';
import FooterHome from './components/FooterHome';
import HomePage from './pages/Home';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <NavBarHome />
        <FooterHome />
      </div>
    );
  }
}

export default App;
