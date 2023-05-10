import React from 'react';
import Card from "./Card";

type Props = {
    character:Character[]
}

type Character = {
    id:number
    name:string
    species:string
    image:string
    status:string
}

function Gallery(props: Props) {
    return (
        <div>
            {props.character.map(currentChar => <Card key={currentChar.name} character={currentChar}/>)}
        </div>
    );
}

export default Gallery;