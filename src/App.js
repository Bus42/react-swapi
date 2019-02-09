import React, { Component } from 'react';
import Menu from './components/views/Menu';
import Footer from './components/views/Footer';
import Header from './components/views/Header';

class App extends Component {
  render () {
    return (
      <div id="App">
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}

export default App
