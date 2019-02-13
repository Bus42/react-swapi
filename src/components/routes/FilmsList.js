import React, {Component} from 'react';

class Films extends Component {
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

                //find if record already exists in local storage
                const data = JSON.parse(sessionStorage.getItem(`${current}`));
                if (data) {
                    console.log(`%cRecord for ${JSON.parse(sessionStorage[current]).name} already exists in local storage.`, "color: #E0BE46");
                    newState[title][category] = [
                        ...newState[title][category],
                        data
                    ]
                    this.setState({
                        ...newState
                    })
                }
                if (data === null) {
                    console.log(`%cFetching ${current}`, "color: #939393")
                    fetch(current)
                        .then(res => res.json())
                        .then(data => {
                            //store item in local storage to avoid fetching any data a second time
                            sessionStorage.setItem(`${current}`, JSON.stringify(data))
                            newState[title][category] = [
                                ...newState[title][category],
                                data
                            ]
                            this.setState({
                                ...newState
                            })
                        })
                        .catch(err => console.error(err))
                }
            }
        }
    }

    render() {

        return (
            <div id="Films" className="container">
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
                                            borderColor: "var(--red)",
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
                                                                className="card grey darken-3">
                                                                <h6
                                                                    className="link-text"
                                                                    onClick={() => this.handleClick([...result.characters], result.title, 'characters')}>Characters</h6>
                                                                <hr
                                                                    style={{
                                                                    borderColor: "var(--red)"
                                                                }}/> {this.state[result.title]
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
                                                                    : <span></span>}
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
