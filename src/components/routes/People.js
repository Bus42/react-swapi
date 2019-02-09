import React, { Component } from 'react';

class People extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>People Component</h3>
                <p>People component works</p>
            </div>
        )
    }
    
}

export default People;
