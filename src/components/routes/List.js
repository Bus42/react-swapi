import React, {Component} from 'react';

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
                <ul
                    className="collapsible grey darken-3"
                    style={{
                    border: "none"
                }}>
                    {this.state.data
                        ? <ul>
                                {this
                                    .state
                                    .data
                                    .results
                                    .map((result, index) => (
                                        <div
                                            key={index}
                                            className="collapsible-header grey darken-4"
                                            style={{
                                            borderColor: "var(--red)"
                                        }}>
                                            <li>
                                                <a className="link-text" href={result.url} target="new">{result.name || result.title}</a>
                                            </li>
                                        </div>
                                    ))}
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
                            </ul>
                        : <div className="progress">
                            <div className="indeterminate"></div>
                        </div>}
                </ul>
            </div>
        )
    }

}

export default List;
