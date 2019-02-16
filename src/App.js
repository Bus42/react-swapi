import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import List from './components/routes/List';
import Home from './components/views/Home';
import Footer from './components/views/Footer';
import Header from './components/views/Header';

import characters from './assets/characters.jpg';
import planets from './assets/planets.png';
import species from './assets/species.jpg';
import starships from './assets/starships.jpg';
import films from './assets/films.jpeg';
import vehicles from './assets/vehicles.jpg';
import Detail from './components/routes/Detail';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseURL: "https://swapi.co/api",
            cards: [
                {
                    image: characters,
                    title: 'Characters',
                    id: 1,
                    URL: "/people/"
                }, {
                    image: planets,
                    title: 'Planets',
                    id: 2,
                    URL: "/planets/"
                }, {
                    image: species,
                    title: 'Species',
                    id: 3,
                    URL: "/species/"
                }, {
                    image: vehicles,
                    title: 'Vehicles',
                    id: 4,
                    URL: "/vehicles/"
                }, {
                    image: starships,
                    title: 'Starships',
                    id: 5,
                    URL: "/starships/"
                }, {
                    image: films,
                    title: 'Films',
                    id: 6,
                    URL: "/films/"
                }
            ]
        }
    }
    getData = (url) => {
        console.log(`fetching ${url}`)
        return new Promise((resolve, reject) => {
            //check if url record exists in session storage
            if (sessionStorage.getItem(url)) {
                console.log("URL record exists in session storage")
                const data = JSON.parse(sessionStorage.getItem(url));
                console.log(data)
                //resolve data in local storage
                resolve(data)
            } else {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        const toStorage = JSON.stringify(data);
                        sessionStorage.setItem(`${url}`, toStorage);
                        console.log(data);
                        resolve(data);
                    })
                    .catch(err => reject(err));
            }
        })
    }

    render() {

        return (
            <Router>
                <div id="App">
                    <Header/>
                    <div
                        style={{
                        marginTop: "5em",
                        paddingBottom: "1em"
                    }}>
                        <Route
                            path="/"
                            exact
                            component={() =>< Home cards = {
                            this.state.cards
                        } />}/> {this
                            .state
                            .cards
                            .map((card, index) => <Route
                                key={index}
                                path={card.URL}
                                component={() => <List
                                header={card.title}
                                url={`${this.state.baseURL}${card.URL}`}
                                getData={this.getData}/>}/>)}
                        <Route path="/detail/:id" component={Detail}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App
