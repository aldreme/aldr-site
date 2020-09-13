import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './util/i18n';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
