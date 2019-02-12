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
            . finally(() => {
                console.log(this.state.data || 'fetch on mount failed');
            });
    }

    handleClick = async(arr, title, category) => {
        let newState = {
            ...this.state
        }
        if (newState[title]) {
            console.log(`${title} already exists in state`);
            return null
        } else {
            newState[title] = {};
            newState[title][category] = []
            for (let url = 0; url < arr.length; url++) {
                const current = arr[url];
                fetch(current)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        newState[title][category] = [
                            ...newState[title][category],
                            data
                        ]
                        localStorage.setItem(data.name, data)
                        this.setState({
                            ...newState
                        })
                    })
                    .catch(err => console.error(err))
            }
        }
    }

    render() {

        return (
            <div id="Films">
                <h3>Films</h3>
                <ul
                    className="collapsible"
                    style={{
                    border: "none"
                }}>
                    {this.state.data
                        ? this
                            .state
                            .data
                            .results
                            .sort((a, b) => a.episode_id - b.episode_id)
                            .map((result, index) => {
                                return (
                                    <li key={index}>
                                        <div
                                            className="collapsible-header grey darken-4 link-text"
                                            style={{
                                            borderColor: "var(--red)"
                                        }}>{result.title}</div>
                                        <div
                                            className="collapsible-body"
                                            style={{
                                            borderColor: "var(--yellow)",
                                            padding: 0
                                        }}>
                                            <div className="card grey darken-3">

                                                <div
                                                    className="card-title"
                                                    style={{
                                                    paddingLeft: "0.5em"
                                                }}>Episode {result.episode_id}</div>
                                                <div className="card-content">
                                                    <h5>{result.opening_crawl}</h5>
                                                    <ul>
                                                        <li>
                                                            {/**
                                        Break following div out into separate component
                                        Pass result into props
                                        Map over list of characters, planets, etc
                                         */}
                                                            <div
                                                                style={{
                                                                padding: "8px"
                                                            }}
                                                                className="collection grey darken-3">
                                                                <h6
                                                                    className="link-text"
                                                                    onClick={() => this.handleClick([...result.characters], result.title, 'characters').then(()=>console.log(sessionStorage))}>Characters</h6>
                                                                {this.state[result.title]
                                                                    ? this
                                                                        .state[result.title]
                                                                        .characters
                                                                        .map((character, index) => (
                                                                            <div
                                                                                style={{
                                                                                border: "none"
                                                                            }}
                                                                                key={index}
                                                                                className="collection-item grey darken-3">
                                                                                <a
                                                                                    className="link-text"
                                                                                    href={`https://starwars.fandom.com/wiki/${character.name}`}
                                                                                    target={character.name}>{character.name}</a>
                                                                            </div>
                                                                        ))
                                                                    : <hr
                                                                        style={{
                                                                        borderColor: "var(--yellow)"
                                                                    }}/>}
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
                                                    <p>Released
                                                        <span
                                                            style={{
                                                            color: "var(--silver)"
                                                        }}>{result.release_date}</span>
                                                    </p>
                                                    <p>Directed by
                                                        <span
                                                            style={{
                                                            color: "var(--silver)"
                                                        }}>{result.director}</span>
                                                    </p>
                                                    <p>Produced by
                                                        <span
                                                            style={{
                                                            color: "var(--silver)"
                                                        }}>{result.producer}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        : <div className="progress">
                            <div className="indeterminate"></div>
                        </div>}
                </ul>
            </div>
        )
    }

}

export default Films;
