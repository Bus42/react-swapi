import React, { Component } from 'react';
import Footer from './routes/views/Footer';
import './App.css';
import Menu from './routes/views/Menu';

class App extends Component {
  render () {
    return (
      <div id="App">
        <Menu/>
        <Footer/>
      </div>
    )
  }
}

export default App
