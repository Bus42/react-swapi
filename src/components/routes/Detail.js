import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Detail extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){

        return (
            <div className="card grey darken-3">
                <div className="card-title grey darken-3">
                    <h3>Detail Component</h3>
                </div>
            </div>
        )
    }
    
}

export default Detail;
