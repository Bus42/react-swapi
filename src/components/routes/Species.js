import React, {Component} from 'react';

class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this
            .props
            .getData(this.props.url)
            .then(data => this.setState({data}))
    }

    render() {

        return (
            <div className="container">
                <h3>Species</h3>
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
                                            className="collapsible-header grey darken-4 link-text"
                                            style={{
                                            borderColor: "var(--red)"
                                        }}>
                                            <li>{result.name}</li>
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

export default People;
