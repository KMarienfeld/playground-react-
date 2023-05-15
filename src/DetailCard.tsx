import React from 'react';
import {Character} from "./Card";
import {Link, useParams} from "react-router-dom";

type Props = {
    characters: Character[]
}

function DetailCard(props:Props) {
    const params = useParams()
    const id :string |  undefined = params.id
    if (!id) return <div>id is missing</div>

    const foundCard:Character | undefined = props.characters.find(currentChar => currentChar.id === parseInt(id));

    return (
        <div>
            <h1>Die Details von: {foundCard?.name}</h1>
            <h2>{foundCard?.status}</h2>
            <h2>{foundCard?.image}</h2>
            <Link to={"/"}>back</Link>
        </div>
    );
}

export default DetailCard;