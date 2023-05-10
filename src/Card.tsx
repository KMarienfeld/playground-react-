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
            <h1>Name: {props.character.name}</h1>
            <img src={props.character.image}/>
            <p>Species: {props.character.species}</p>
            <p>Status: {props.character.status}</p>
        </div>
    );
}
