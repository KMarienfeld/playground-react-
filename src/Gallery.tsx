import React, {ChangeEvent, useEffect, useState} from 'react';
import Card from "./Card"
import axios from "axios";
import "./Gallery.css"

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

type Info = {
    next:string,
    prev:string
}

function Gallery() {
    const [characters, setCharacters] = useState<RickAndMortyCharacters[]>([])

    const [inputFieldValue, setInputFieldValue] = useState<string>("")
    const filteredByName = characters.filter((characters) => characters.name.toLowerCase().includes(inputFieldValue.toLowerCase()))

    const [info, setInfo] = useState<Info>({next: "", prev:""})
    const [url, setUrl] = useState<string>("https://rickandmortyapi.com/api/character")

    function getAllCharactersFromApi() {
        axios.get(url)
            .then((response) => {
                setCharacters(response.data.results);
                setInfo(response.data.info);
                })
    }

    function useTextInput(event: ChangeEvent<HTMLInputElement>) {
        setInputFieldValue(event.target.value)

    }


    function onClickSetUrlPrev() {
        setUrl(info.prev)
    }

    function onClickSetUrlNext() {
        setUrl(info.next)
    }
    useEffect(getAllCharactersFromApi, [url])

    return (
        <div>
            <div className="inputAndButton">
                <input className="input" type="text" onChange={useTextInput} value={inputFieldValue} placeholder="search character by name"/>

                <button className="buttonAllChar">get all characters</button>
                <br/>
                {info.prev === null ? <></> : <button onClick={onClickSetUrlPrev}>prev</button>}
                {info.next === null ? <></> : <button onClick={onClickSetUrlNext}>next</button>}
            </div>
            <div className="gallery">

                {filteredByName.map(currentChar => <Card key={currentChar.name} character={currentChar}/>)}

            </div>
        </div>
    );
}

export default Gallery;