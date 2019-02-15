import React, { Component } from 'react';

class Detail extends Component{
    state = {
        data: null
    }

    componentDidMount(){
        const data = this.props.location.state.data;
        this.setState({data});
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
