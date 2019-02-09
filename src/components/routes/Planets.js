import React, { Component } from 'react';

class Planets extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>Planets Component</h3>
                <p>Planets component works</p>
            </div>
        )
    }
    
}

export default Planets;
