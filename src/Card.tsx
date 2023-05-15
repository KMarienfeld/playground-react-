import React from 'react';
import "./Card.css"
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate()

    function showDetails() {
        navigate("/details/"+props.character.id)
    }

    return (
        <div className="card">
            <h2>{props.character.name}</h2>
            <img src={props.character.image}/>
            <p>species: {props.character.species}</p>
            <p>status: {props.character.status}</p>
            <button onClick={showDetails}>Details</button>
        </div>
    );
}
export default Card;