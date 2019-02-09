import React, { Component } from 'react';

class Starships extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>Starships Component</h3>
                <p>Starships component works</p>
            </div>
        )
    }
    
}

export default Starships;
