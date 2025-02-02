import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import './util/i18n';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
