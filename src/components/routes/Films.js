import React, { Component } from 'react';

class Films extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return (
            <div className="container">
                <h3>Films Component</h3>
                <p>Films component works</p>
            </div>
        )
    }
    
}

export default Films;
