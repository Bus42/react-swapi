import React, { Component } from 'react';

class Vehicles extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>Vehicles Component</h3>
                <p>Vehicles component works</p>
            </div>
        )
    }
    
}

export default Vehicles;
