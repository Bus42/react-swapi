import React, {Component} from 'react';

class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/films')
            .then(res => res.json())
            .then(data => this.setState({data}))
            . finally(() => {
                console.log(this.state.data)
            })
    }

    render() {

        return (
            <div className="container">
                {this.state.data
                    ? this
                        .state
                        .data
                        .results
                        .map((result, index) => <div key={index} className="card grey darken-3">
                            <div
                                className="card-title"
                                style={{
                                padding: "8px"
                            }}>{result.title}</div>
                            <div className="card-content">Episode {result.episode_id}</div>
                            <div className="card-content">
                                    <h5>{result.opening_crawl}</h5>
                                <ul>
                                    <li>
                                        <div style={{padding: "8px"}} className="card grey darken-3">Characters</div>
                                    </li>
                                    <li>
                                        <div style={{padding: "8px"}} className="card grey darken-3">Planets</div>
                                    </li>
                                    <li>
                                        <div style={{padding: "8px"}} className="card grey darken-3">Species</div>
                                    </li>
                                    <li>
                                        <div style={{padding: "8px"}} className="card grey darken-3">Starships</div>
                                    </li>
                                    <li>
                                        <div style={{padding: "8px"}} className="card grey darken-3">Vehicles</div>
                                    </li>
                                </ul>
                                <p>Released <span style={{color:"var(--silver)"}} >{result.release_date}</span></p>
                                <p>Directed by <span style={{color:"var(--silver)"}} >{result.director}</span></p>
                                <p>Produced by <span style={{color:"var(--silver)"}} >{result.producer}</span></p>
                            </div>

                        </div>)
                    : <div className="progress">
                        <div className="indeterminate"></div>
                    </div>}
            </div>
        )
    }

}

export default Films;
