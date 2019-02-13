import React from 'react';

const Home = (props) => {
    const cards = props.cards

            return (
                <div id='Home' className="container">
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

export default Home;
