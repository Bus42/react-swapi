import React, { Component } from 'react'
import Home from '../Routes/Home';

class Menu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <Home/>
        )
    }
    
}

export default Menu;
