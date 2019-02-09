import React, { Component } from 'react';

class Species extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>Species Component</h3>
                <p>Species component works</p>
            </div>
        )
    }
    
}

export default Species;
