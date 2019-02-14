import React, { Component } from 'react';

class CharacterDetail extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    render(){

        return <div className="card">
            <div className="card-title">
                <h6>CharacterDetail Component</h6>
            </div>
            <div className="card-content">
                <p>state.data = {this.state.data ? "true" : "false"}</p>
            </div>
        </div>
    }
}

export default CharacterDetail;
