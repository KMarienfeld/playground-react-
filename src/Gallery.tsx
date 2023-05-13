import React, {ChangeEvent, useState} from 'react';
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
    const [showCharacters, setShowCharacters] = useState(false)
    const [inputFieldValue, setInputFieldValue] = useState<string>("")
    const filteredByName = characters.filter((characters) => characters.name.toLowerCase().includes(inputFieldValue.toLowerCase()))
    const [showFilteredCharacters, setFilteredCharacters] = useState(false)


    function getAllCharactersFromApi() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results);
                })
    }

    function useTextInput(event: ChangeEvent<HTMLInputElement>) {
        setInputFieldValue(event.target.value)
        getAllCharactersFromApi();
        setShowCharacters(false);
        setFilteredCharacters(true);
    }


    return (
        <div>
            <input type="text" onChange={useTextInput} value={inputFieldValue} placeholder="search character by name"/>

            <button onClick={() => {
                getAllCharactersFromApi();
                setShowCharacters(true);
            }}>get all characters</button>
            {showCharacters && characters.map(currentChar => <Card key={currentChar.name} character={currentChar}/>)}
            {showFilteredCharacters && filteredByName.map(currentChar => <Card key={currentChar.name} character={currentChar}/>)}



        </div>
    );
}

export default Gallery;