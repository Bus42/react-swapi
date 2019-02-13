import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import CharactersList from './components/routes/CharactersList';
import FilmsList from './components/routes/FilmsList';
import PlanetsList from './components/routes/PlanetsList';
import SpeciesList from './components/routes/SpeciesList';
import StarshipsList from './components/routes/StarshipsList';
import VehiclesList from './components/routes/VehiclesList';

import Footer from './components/views/Footer';
import Home from './components/views/Home';
import Header from './components/views/Header';

import characters from './assets/characters.jpg';
import planets from './assets/planets.png';
import species from './assets/species.jpg';
import starships from './assets/starships.jpg';
import films from './assets/films.jpeg';
import vehicles from './assets/vehicles.jpg';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [
                {
                    image: characters,
                    title: 'Characters',
                    id: 1,
                    link: "/characters"
                }, {
                    image: planets,
                    title: 'Planets',
                    id: 2,
                    link: "/planets"
                }, {
                    image: species,
                    title: 'Species',
                    id: 3,
                    link: "/species"
                }, {
                    image: vehicles,
                    title: 'Vehicles',
                    id: 4,
                    link: "/vehicles"
                }, {
                    image: starships,
                    title: 'Starships',
                    id: 5,
                    link: "/starships"
                }, {
                    image: films,
                    title: 'Films',
                    id: 6,
                    link: "/films"
                }
            ],
            endpoints: {
                films: "https://swapi.co/api/films/",
                characters: "https://swapi.co/api/people/",
                planets: "https://swapi.co/api/planets/",
                starships: "https://swapi.co/api/starships/",
                vehicles: "https://swapi.co/api/vehicles/",
                species: "https://swapi.co/api/species/"
            }
        }
    }
    getData = (url) => {
        // Add function to check local storage for URL record - if so, set state from
        // local storage - if not, proceed to fetch then store data in local storage
        console.log(`fetching ${url}`)
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
                . finally(() => {
                    console.log("Data fetched" || 'fetch on mount failed');
                });
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
                        <Route path="/" exact component={() => <Home cards={this.state.cards}/>}/>
                        <Route
                            path="/characters"
                            component={() => <CharactersList url={this.state.endpoints.characters} getData={this.getData}/>}/>
                        <Route
                            path="/planets"
                            component={() => <PlanetsList url={this.state.endpoints.planets} getData={this.getData}/>}/>
                        <Route
                            path="/species"
                            component={() => <SpeciesList url={this.state.endpoints.species} getData={this.getData}/>}/>
                        <Route
                            path="/vehicles"
                            component={() => <VehiclesList url={this.state.endpoints.vehicles} getData={this.getData}/>}/>
                        <Route
                            path="/starships"
                            component={() => <StarshipsList url={this.state.endpoints.starships} getData={this.getData}/>}/>
                        <Route
                            path="/films"
                            component={() => <FilmsList url={this.state.endpoints.films} getData={this.getData}/>}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App
