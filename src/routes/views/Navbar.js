import React, { Component } from 'react'

class Navbar extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         active: null
      }
    }
    
    render(){

        return ( <nav className="navbar" >People | Planets | Starships | Vehicles | Films | Species</nav> )
    }
}

export default Navbar;
