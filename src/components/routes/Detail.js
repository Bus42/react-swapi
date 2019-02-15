import React, {Component} from 'react';

class Detail extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        const data = this.props.location.state.data;
        data.dataKeys = Object.keys(data);
        this.setState({data})
    }

    render() {

        return (
            <div className="container">
                <div className="card grey darken-3">
                    <div className="card-title grey darken-3">
                        <h4
                            style={{
                            padding: "8px"
                        }}>{this
                                .props
                                .match
                                .params
                                .id
                                .toUpperCase()
                                .replace(/[_]/g, ' ')}
                        </h4>
                    </div>
                    <div className="card-content">
                        {this.state.data
                            ? <ul>{this
                                        .state
                                        .data
                                        .dataKeys
                                        .map((dataKey, index) => {
                                            return (
                                                <li key={index}>{dataKey.replace(/[_]/g, ' ').toUpperCase()}: <span style={{color: "var(--silver)"}} >{this.state.data[dataKey]}</span></li>
                                            )
                                        })}</ul>
                            : <div className="progress">
                                <div className="indeterminate"></div>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }

}

export default Detail;
