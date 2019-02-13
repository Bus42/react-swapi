import React, { Component } from 'react';

class Starships extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data: null
      }
    }

    componentDidMount(){
        this.props.getData(this.props.url)
        .then(data => this.setState({data}))
        .then(()=>console.log(this.state.data))
    }

    render(){

        return (
            <div className="container">
                <h3>Starships</h3>
                {this.state.data ? 
                <ul>
                    {this.state.data.results.map((result, index) => (<li key={index}><h6>{result.name}</h6></li>) )}
                    {this.state.data.previous ? <button onClick={() => this.props.getData(this.state.data.previous).then(data => this.setState({data}))} >Previous 10 results</button> : <span></span> }
                    {this.state.data.next ? <button onClick={() => this.props.getData(this.state.data.next).then(data => this.setState({data}))} >Next 10 results</button> : <span></span> }
                </ul>  : <div className="progress">
                    <div className="indeterminate"></div>
                </div> }
            </div>
        )
    }
    
}

export default Starships;
