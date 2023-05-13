import React from 'react';


type Props = {
    character: Character
}

type Character = {
    id: number
    name: string
    species: string
    image: string
    status: string
}

function Card(props: Props) {
    return (
        <div>
            <h2>{props.character.name}</h2>
            <img src={props.character.image}/>
            <p>species: {props.character.species}</p>
            <p>status: {props.character.status}</p>
        </div>
    );
}
export default Card;