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
            .catch(err => console.error(err))
            .finally(() => {
                console.log(this.state.data || 'fetch on mount failed');
            });
    }

    getData = async (arr, title, category) => {
        let newState = {...this.state}
        newState[title] = {};
        newState[title][category] = []
        for (let url = 0; url < arr.length; url++) {
            const current = arr[url];
            fetch(current)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                newState[title][category] = [...newState[title][category], data]
                this.setState({...newState})
            })
            .catch(err => console.error(err))
        }
    }

    render() {

        return (
            <div className="container">
                {this.state.data
                    ? this
                        .state
                        .data
                        .results
                        .sort((a,b) => a.episode_id - b.episode_id)
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
                                        <div
                                            style={{
                                            padding: "8px"
                                        }}
                                            className="card grey darken-2">
                                            <h6 onClick={() => this.getData([...result.characters], result.title, 'characters')} >Characters</h6>
                                            {this.state[result.title] ? this.state[result.title].characters.map((character, index) => <button key={index} type="button" className="btn waves-effect waves-light grey darken-3" style={{display: "inline", margin: "8px"}}> <a style={{color: "white"}} href={character.url} target={character.name}>{character.name}</a> </button>
                                            ) : <hr style={{borderColor: "var(--yellow)"}} /> }
                                        </div>

                                    </li>
                                    <li>
                                        <div
                                            style={{
                                            padding: "8px"
                                        }}
                                            className="card grey darken-3">Planets</div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                            padding: "8px"
                                        }}
                                            className="card grey darken-3">Species</div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                            padding: "8px"
                                        }}
                                            className="card grey darken-3">Starships</div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                            padding: "8px"
                                        }}
                                            className="card grey darken-3">Vehicles</div>
                                    </li>
                                </ul>
                                <p>Released <span
                                        style={{
                                        color: "var(--silver)"
                                    }}>{result.release_date}</span>
                                </p>
                                <p>Directed by <span
                                        style={{
                                        color: "var(--silver)"
                                    }}>{result.director}</span>
                                </p>
                                <p>Produced by <span
                                        style={{
                                        color: "var(--silver)"
                                    }}>{result.producer}</span>
                                </p>
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
