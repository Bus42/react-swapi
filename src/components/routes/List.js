import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        if(this.state.data){
            console.log("Data already exists")
            return null
        }
        this
            .props
            .getData(this.props.url)
            .then(data => this.setState({data}))
    }

    render() {

        return (
            <div className="container">
                <h3>{this.props.header}</h3>
                    {this.state.data
                        ? <div>
                                {this
                                    .state
                                    .data
                                    .results
                                    .map((result, index) => { 
                                        const linkTo = result.name ? result.name.toLowerCase().replace(/\s/g, '_') : result.title.toLowerCase().replace(/\s/g, '_');
                                        return (
                                        
                                            <div className="card grey darken-4" key={index}>
                                                    <div style={{padding: "8px 13px"}} className="card-title link-text"><Link to={
                                                        {
                                                            pathname: `/detail/${linkTo}`,
                                                            state: {
                                                                data: result
                                                            }
                                                        }
                                                        }>{result.name || result.title}</Link></div>
                                            </div>
                                        )})}
                                {this.state.data.previous
                                    ? <button
                                            className="btn waves-effect waves-light grey darken-2 left"
                                            style={{
                                            marginTop: "1em"
                                        }}
                                            onClick={() => this.props.getData(this.state.data.previous).then(data => this.setState({data}))}>
                                            <i className="material-icons left">fast_rewind</i>
                                            <span>Prev</span>
                                        </button>
                                    : <span></span>}
                                {this.state.data.next
                                    ? <button
                                            className="btn waves-effect waves-light grey darken-2 right"
                                            style={{
                                            marginTop: "1em"
                                        }}
                                            onClick={() => this.props.getData(this.state.data.next).then(data => this.setState({data}))}>
                                            <i className="material-icons right">fast_forward</i>
                                            <span>Next</span>
                                        </button>
                                    : <span></span>}
                            </div>
                        : <div className="progress">
                            <div className="indeterminate"></div>
                        </div>}
            </div>
        )
    }

}

export default List;
