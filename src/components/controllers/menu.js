const characters = '../../assets/characters.jpg';
const planets = '../../assets/planets.png';
const species = '../../assets/species.jpg';
const starships = '../../assets/starships.jpg';
const films = '../../assets/films.jpg';
const vehicles = '../../assets/vehicles.jpg';

const menu = () => {
    const tiles = {
        characters: {
            image: characters,
            title: 'Characters',
            id: 1
        },
        planets: {
            image: planets,
            title: 'Planets',
            id: 2
        },
        species: {
            image: species,
            title: 'Species',
            id: 3
        },
        vehicles: {
            image: vehicles,
            title: 'Vehicles',
            id: 4
        },
        starships: {
            image: starships,
            title: 'Starships',
            id: 5
        },
        films: {
            image: films,
            title: 'Films',
            id: 6
        }
    }
    return tiles
}

export default menu;
