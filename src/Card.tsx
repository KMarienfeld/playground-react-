import React from 'react';
import "./Card.css"

type Props = {
    character: Character
}

export type Character = {
    id: number
    name: string
    species: string
    image: string
    status: string
}

function Card(props: Props) {
    return (
        <div className="card">
            <h2>{props.character.name}</h2>
            <img src={props.character.image}/>
            <p>species: {props.character.species}</p>
            <p>status: {props.character.status}</p>
        </div>
    );
}
export default Card;