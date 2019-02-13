import React, { Component } from 'react';

class Planets extends Component{
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
                <h3>Planets</h3>
                {this.state.data ? 
                <ul>
                    {this.state.data.results.map((result, index) => (<li key={index}><h6>{result.name}</h6></li>) )}
                    {this.state.data.previous ? <button className="btn waves-effect waves-light grey darken-2" onClick={() => this.props.getData(this.state.data.previous).then(data => this.setState({data}))} ><i className="material-icons left" >fast_rewind</i><span>Prev</span></button> : <span></span> }
                    {this.state.data.next ? <button className="btn waves-effect waves-light grey darken-2" onClick={() => this.props.getData(this.state.data.next).then(data => this.setState({data}))} ><i className="material-icons right" >fast_forward</i><span>Next</span></button> : <span></span> }
                </ul>  : <div className="progress">
                    <div className="indeterminate"></div>
                </div> }
            </div>
        )
    }
    
}

export default Planets;
