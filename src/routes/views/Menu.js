import React, {Component} from 'react'
import characters from '../../assets/characters.jpg';
import planets from '../../assets/planets.png';
import species from '../../assets/species.jpg';
import starships from '../../assets/starships.jpg';
import films from '../../assets/films.jpeg';
import vehicles from '../../assets/vehicles.jpg';

class Menu extends Component {
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
            ]
        }
    }

    render() {
        let cards = [...this.state.cards];
        console.log(cards);

        return (
            <div id='Menu' className="container">
                {cards.map(card => <div key={card.id} className="card grey darken-3">
                <div className="card-image">
                    <img src={card.image} alt={card.title}/>
                </div>
                <div className="card-action">
                  <a href={card.link}>{card.title}</a>
                </div>
                </div>)}
            </div>
        )
    }
}

export default Menu;
