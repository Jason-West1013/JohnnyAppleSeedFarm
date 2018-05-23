import React, { Component } from 'react';

// Main page components
import Main from './components/main';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
