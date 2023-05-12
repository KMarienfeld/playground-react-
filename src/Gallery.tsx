import React, {useState} from 'react';
import Card from "./Card"
import axios from "axios";

type Props = {
    character:RickAndMortyCharacters[]
}

type RickAndMortyCharacters = {
    id:number
    name:string
    species:string
    image:string
    status:string
    origin: {name:string}
}

function Gallery() {
    const [characters, setCharacters] = useState<RickAndMortyCharacters[]>([])
    function getAllCharactersFromApi() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
                })
    }

    return (
        <div>
            <button onClick={getAllCharactersFromApi}>get all characters</button>
            {characters.map(currentChar => <Card key={currentChar.name} character={currentChar}/>)}
        </div>
    );
}

export default Gallery;