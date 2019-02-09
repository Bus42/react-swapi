import React, { Component } from 'react'

class Header extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }
    

    render(){

        return (
            <nav className="grey darken-3" >
                <span className="right">
                <i className="fas fa-journal-whills fa-2x" style={{padding: "12px", cursor: "pointer"}} ></i>
                </span>
            </nav>
        )
    }
}

export default Header;
