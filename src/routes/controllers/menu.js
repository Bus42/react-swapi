const menu = () => {
    const tiles = {
        people: {
            imageSrc: '',
            title: 'Characters',
            id: 1
        },
        planets: {
            imageSrc: 'Planets',
            title: '',
            id: 2
        },
        species: {
            imageSrc: 'Species',
            title: '',
            id: 3
        },
        vehicles: {
            imageSrc: '',
            title: 'Vehicles',
            id: 4
        },
        starships: {
            imageSrc: '',
            title: 'Starships',
            id: 5
        },
        films: {
            imageSrc: '',
            title: 'Films',
            id: 6
        }
    }
    return {...tiles}
}
