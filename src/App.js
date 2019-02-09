import React, { Component } from 'react';
import Footer from './routes/views/Footer';
import Menu from './routes/views/Menu';
import Header from './routes/views/Header';

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
